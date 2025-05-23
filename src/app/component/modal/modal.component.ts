import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import axios from '../../../utils/axios';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  loading = false
  @Input() typeModal: string = ''
  @Output() closeModal = new EventEmitter<boolean>()
  pdf: any
  formCreate = new FormGroup({
    n_Documento : new FormControl('',[Validators.required]),
        name_Documento : new FormControl('',[Validators.required]),
        fecha_Documento : new FormControl('',[Validators.required]),
        type_Document : new FormControl('',[Validators.required]),
        folder_name : new FormControl('',[Validators.required]),
        file_name: new FormControl('',[Validators.required])

  })
  
  async crearDocumento(){
    try {
      this.loading = !this.loading
    const datos = new FormData()
    const valores = this.formCreate.value as any;
    for (const campo in valores) {
      if (valores.hasOwnProperty(campo)) {
        datos.append(campo, valores[campo]);
      }
    }
    datos.append('pdf', this.pdf)
    const newDocument = await axios.post('/document', datos , {
  withCredentials: true
} )
    console.log(newDocument)
    } catch (error) {
      console.log(error)
    } finally{
this.closemodal()
    this.loading = !this.loading
    }
    
  }
  editDocumento(){

  }
  captureFile(event:any){
    // console.log(event.target.files)
    const archivoCapturado = event.target.files[0]
    this.pdf = archivoCapturado
  }
  closemodal(){
    this.formCreate.reset()
    this.closeModal.emit(false)
  }
}
