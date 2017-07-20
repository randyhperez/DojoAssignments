import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Output() newQuoteEventEmitter = new EventEmitter()

  newQuote: Quote = new Quote()


  onSubmit(event){
    event.preventDefault();
    console.log("Submitting Quote");
    this.newQuoteEventEmitter.emit(this.newQuote)
    this.newQuote = {
      id: 0,
      quote: "",
      author: "",
      votes: 0,
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
