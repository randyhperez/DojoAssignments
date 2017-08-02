import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QUOTES } from '../data/quotes';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  @Input() allQuotes: Array<Quote> = [];
  @Output() deleteEventEmitter = new EventEmitter();
  quotes = QUOTES;

  voteUp(quote){
    console.log('up vote');
    quote.votes++;
    
  }

  voteDown(quote){
    console.log('down vote');
    quote.votes--;
    
  }

  deleteQuote(quote){
    console.log('deleting');
    this.deleteEventEmitter.emit(quote);
  }

  constructor() { }

  ngOnInit() {
  }

}
