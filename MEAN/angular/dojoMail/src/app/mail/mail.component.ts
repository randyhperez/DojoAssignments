import { Component, OnInit } from '@angular/core';
import { Email } from '../email';
@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
  emailArr: Array<Email> = [
    {
    id: 1,
    email: 'richard@piedpiper.com',
    importance: true,
    subject: 'checkout decentralized internet',
    content: 'lorem ipsum blah blah'
  },
  {
    id: 2,
    email: 'dinesh@piedpiper.com',
    importance: false,
    subject: 'I like gold chains',
    content: 'lorem ipsum blah blah' 
  },
  {
    id: 3,
    email: 'gilfoyle@piedpiper.com',
    importance: false,
    subject: 'I miss Anton',
    content: 'blaaaaaaaah something here' 
  },
    {
    id: 4,
    email: 'jared@piedpiper.com',
    importance: true,
    subject: 'Hey Dinesh nice gold chain',
    content: 'lorem ipsum blah blah' 
  }
  ]
}
