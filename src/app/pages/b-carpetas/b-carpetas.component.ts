import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import axios from '../../../utils/axios';

@Component({
  selector: 'app-b-carpetas',
  templateUrl: './b-carpetas.component.html',
  styleUrls: ['./b-carpetas.component.css']
})
export class BCarpetasComponent implements OnInit {
  documents: any
  infoPage?: any
  @Output() editar = new EventEmitter<string>()
  page = 1
  prevFolder = ''
  folder = ''
 btnEditar(id : string){
  this.editar.emit(id)
 }
  async enviarDatos(){
    let filtros:any = {}
    
  
  
  if(this.prevFolder != this.folder ) {
    this.page = 1
    this.prevFolder = this.folder 
  }
  this.alldatos()

  }
  async alldatos(){
    
    this.infoPage = await (await axios.get(`/searchDocumentsFolder/${this.page}/${this.folder== '' ? '404' : this.folder}`)).data
    this.documents = this.infoPage.docs
  }
  nextPage(){
    this.page++
    this.alldatos()
  }
  abrirDocumento(link:string): void {
    window.open(link, '_blank');
  }
  prevPage(){
    this.page--
    this.alldatos()
  }
  ngOnInit(): void {
    this.alldatos()
  }
}
