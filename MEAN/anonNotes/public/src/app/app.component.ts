import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Note } from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  notes: Array<Note> = []

  constructor(private _httpService: HttpService){

  }

  ngOnInIt() {
    this.getNotes()
  }

  newNote(note){
    this._httpService.add(note)
      .then(() => {
        console.log('success creating note')
        this.getNotes()
      })
      .catch(() => console.log('failed creating note'))
  }

  getNotes(){
    this._httpService.getNotes()
      .then(allNotes => {
        console.log('Got Notes', allNotes);
        this.notes = allNotes;
      })
      .catch(error => console.log('Error getting allNotes', error));
  }

}
