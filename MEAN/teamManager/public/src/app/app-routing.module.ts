import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { StatusComponent } from './status/status.component';
import { GamesComponent } from './status/games/games.component';


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
    path: 'status/game',
    component: StatusComponent,
    children: [
      {
        path: ':id',
        component: GamesComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
