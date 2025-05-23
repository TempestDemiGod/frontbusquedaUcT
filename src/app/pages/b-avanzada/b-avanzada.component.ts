import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import axios from '../../../utils/axios';
@Component({
  selector: 'app-b-avanzada',
  templateUrl: './b-avanzada.component.html',
  styleUrls: ['./b-avanzada.component.css']
})
export class BAvanzadaComponent implements OnInit {
  documents: any
  infoPage?: any
  filtroDatos: any
  @Output() editar = new EventEmitter<string>()
  page = 1
  formAvanzado = new FormGroup({
    n_Documento : new FormControl(''),
    name_Documento : new FormControl('',[Validators.required]),
    fecha_Documento : new FormControl(''),
    type_Document : new FormControl(''),
  })
 btnEditar(id : string){
  this.editar.emit(id)
 }
  async enviarDatos(){
    let filtros:any = {}
    
    if(this.formAvanzado.value?.fecha_Documento) filtros.fecha_Documento = this.formAvanzado.value?.fecha_Documento.split('-').join('/')
    if(this.formAvanzado.value?.n_Documento) filtros.n_Documento = this.formAvanzado.value?.n_Documento
    if(this.formAvanzado.value?.type_Document) filtros.type_Document = this.formAvanzado.value?.type_Document

    let datos = {
      filtros,
      name_Documento : this.formAvanzado.value.name_Documento
  }
  
  
  if(this.filtroDatos !=  undefined && this.filtroDatos != datos ) {
    this.page = 1
  }
  this.filtroDatos = datos
  this.infoPage = await (await axios.post(`/searchDocuments/${this.page}`,this.filtroDatos)).data
  console.log(this.infoPage)
  this.documents = this.infoPage.docs

  }
  async deleteDocument(id : string){
    await axios.delete(`/document/${id}`)
    this.alldatos()
  }
  async alldatos(){
    
    this.infoPage = await (await axios.post(`/searchDocuments/${this.page}`)).data
    console.log(this.infoPage)
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
