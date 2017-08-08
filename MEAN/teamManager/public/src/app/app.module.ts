import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

import { HttpModule } from '@angular/http';
import { ApiService } from './api.service';
import { StatusComponent } from './status/status.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListComponent,
    AddComponent,
    StatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
