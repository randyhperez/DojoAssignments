import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Note } from '../note';

@Component({
  selector: 'app-notes-form',
  templateUrl: './notes-form.component.html',
  styleUrls: ['./notes-form.component.css']
})
export class NotesFormComponent implements OnInit {
  note: Note = new Note();

  constructor(private _httpService: HttpService) { }

  onSubmit(event){
    event.preventDefault();
    console.log('Submitting Note', this.note);
    this._httpService.add(this.note)
      .then(() => console.log('success creating note'))
      .catch(() => console.log('failed creating note'))
  }

  ngOnInit() {
  }

}
