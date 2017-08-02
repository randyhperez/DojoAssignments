import { BehaviorSubject } from 'rxjs';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Note } from './note';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
  notesObservable = new BehaviorSubject(null);

  updateNotes(notes: Array<Note>){
    this.notesObservable.next(notes);
  }

  constructor(private _http: Http) { }

  getNotes(){
    console.log('HttpService getNotes')
    return this._http.get('/api/notes')
      .map(data => data.json())
      .toPromise();
  }
  
  add(note){
    console.log('HttpService Add', note)
    return this._http.post('/api/notes', note)
      .map(data => data.json())
      .toPromise()
  }
}
