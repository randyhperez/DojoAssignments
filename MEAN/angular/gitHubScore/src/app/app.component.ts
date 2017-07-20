import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  user: User = {
    exists: null,
    score: 0
  }

  constructor(private _httpService: HttpService) {

  }
  apiCall(username){
    this._httpService.getGit(username)
      .then( result => {
        console.log('the result', result);
        this.user.exists = true;
        this.user.score = result.public_repos + result.followers;
      })
      .catch( error => {
        console.log('the error', error);
        this.user.exists = false;
      })
  }

}
