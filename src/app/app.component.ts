import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnChanges{
  title = 'frontUctDig';
  constructor(private location: Location) {}
  opCarpeta?: boolean
  @Input() modal = false
  typeModal = 'create'
  opAvanzada?: boolean
  opAllDocuments?: boolean
  cambio(option : string){
    if(option == 'A'){
      this.opCarpeta = false
    this.opAvanzada = true
    this.opAllDocuments= false
    }else if(option == 'C'){
      this.opCarpeta = true
    this.opAvanzada = false
    this.opAllDocuments= false
    }else{
      this.opCarpeta = false
    this.opAvanzada = false
    this.opAllDocuments= true
    }
  }
  createModal(){
    this.modal = true
    this.typeModal = 'create'
  }
  editModal(){
    this.modal = true
    this.typeModal = 'edit'
  }
  closemodal(estado : boolean){
    this.modal = estado
    window.location.reload()
  }
  editarDocument(id: any){
    
  }
  ngOnChanges(changes: SimpleChanges){
    
    // window.location.reload();
  }

  ngOnInit(){
    const currentPath = this.location.path(); // da "/bAvanzada" o "/"
  if (currentPath.startsWith('/bAvanzada')){
    this.opCarpeta = false
    this.opAvanzada = true
    this.opAllDocuments= false
  }else if (currentPath.startsWith('/allDocuments')){
    this.opCarpeta = false
    this.opAvanzada = false
    this.opAllDocuments= true
  }else{
    this.opCarpeta = true
    this.opAvanzada = false
    this.opAllDocuments= false
  }
  }
}
