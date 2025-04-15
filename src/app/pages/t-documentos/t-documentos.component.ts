import { Component, OnInit } from '@angular/core';
import axios from '../../../utils/axios';

@Component({
  selector: 'app-t-documentos',
  templateUrl: './t-documentos.component.html',
  styleUrls: ['./t-documentos.component.css']
})
export class TDocumentosComponent implements OnInit {
  documents: any
  infoPage?: any
  page = 1
  
  
  async alldatos(){
    
    this.infoPage = await (await axios.get(`/pageDocuments/${this.page}`)).data
    this.documents = this.infoPage.docs
    console.log(this.documents)
  }
  async deleteDocument(id : string){
    await axios.delete(`/document/${id}`)
    this.alldatos()
  }
  abrirDocumento(link:string): void {
    window.open(link, '_blank');
  }
  nextPage(){
    this.page++
    this.alldatos()
  }
  prevPage(){
    this.page--
    this.alldatos()
  }
  ngOnInit(): void {
    this.alldatos()
  }
}
