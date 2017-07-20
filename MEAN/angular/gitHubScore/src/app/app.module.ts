import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HttpService } from './http.service';
import { AppComponent } from './app.component';
import { GitFormComponent } from './git-form/git-form.component';
import { GitInfoComponent } from './git-info/git-info.component';

@NgModule({
  declarations: [
    AppComponent,
    GitFormComponent,
    GitInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
