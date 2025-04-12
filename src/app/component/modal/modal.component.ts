import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() typeModal: string = ''
  @Output() closeModal = new EventEmitter<boolean>()
  formCreate = new FormGroup({
    n_Documento : new FormControl('',[Validators.required]),
        name_Documento : new FormControl('',[Validators.required]),
        fecha_Documento : new FormControl('',[Validators.required]),
        type_Document : new FormControl('',[Validators.required]),
  })
  
  crearDocumento(){

  }
  editDocumento(){

  }
  closemodal(){
    this.formCreate.reset()
    this.closeModal.emit(false)
  }
}
