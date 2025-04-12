import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BCarpetasComponent } from './pages/b-carpetas/b-carpetas.component';
import { BAvanzadaComponent } from './pages/b-avanzada/b-avanzada.component';
import { TDocumentosComponent } from './pages/t-documentos/t-documentos.component';

const routes: Routes = [
  {path: '' , component: BCarpetasComponent},
  {path: 'bAvanzada' , component: BAvanzadaComponent},
  {path: 'allDocuments', component: TDocumentosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
