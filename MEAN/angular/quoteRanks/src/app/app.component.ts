import { Component } from '@angular/core';
import { QUOTES } from './data/quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  newQuote(quote){
    quote.id = QUOTES.length
    console.log('Adding quote',quote);
    QUOTES.push(quote)
    console.log('QUOTES - ', QUOTES);
    
  }

  deleteQuote(quote){
    QUOTES.splice(QUOTES.indexOf(quote), 1);
  }

}
