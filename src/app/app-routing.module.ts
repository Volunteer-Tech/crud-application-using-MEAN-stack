import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { GetComponent } from './get/get.component';
import { EditComponent } from './edit/edit.component';
import { NotFound4o4Component } from './not-found4o4/not-found4o4.component';

const routes: Routes = [{
  path: '',
  component: AddComponent
},
{
  path: 'user/create',
  component: AddComponent
},
{
  path: 'user/edit/:id',
  component: EditComponent
},
{
  path: 'user',
  component: GetComponent
},
{
  path: '404',
  component: NotFound4o4Component
},
{
  path: '**',
  redirectTo: '404'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
