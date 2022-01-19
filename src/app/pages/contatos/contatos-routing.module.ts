import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { ContatosComponent } from './contatos.component';

// routes
const routes: Routes = [
  { path: '', component: ContatosComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }
