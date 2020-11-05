import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PoliticasComponent} from './politicas/politicas.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'politicas', component: PoliticasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
