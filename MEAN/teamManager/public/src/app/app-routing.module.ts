import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'players/list',
    pathMatch: 'full'
  },
  {
    path: 'players',
    component: LandingComponent,
    children: [
      { path: 'list', component: ListComponent},
      { path: 'add', component: AddComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
