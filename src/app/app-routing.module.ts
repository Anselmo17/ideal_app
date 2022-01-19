import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomeComponent } from './pages/home/home.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';

// rotas 
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // user LazyLoad 'carregamento por demanda'
  {
    path: 'contatos',
    loadChildren: () => import('./pages/contatos/contatos.module').then(m => m.ContatosModule)
  },
  { path: 'sobre', component: SobreNosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
