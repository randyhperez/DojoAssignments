import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { StatusComponent } from './status/status.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'players/list',
    pathMatch: 'full'
  },
  {
    path: 'players',
    children: [
      { 
        path: "add", 
        component: AddComponent 
      },
      { 
        path: "list", 
        component: ListComponent
      },
    ]
  },
  {
    path: 'status',
    component: StatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
