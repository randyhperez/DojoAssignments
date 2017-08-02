import { Component, OnInit } from '@angular/core';
import { User } from "../user"

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  // user: User = ({
  //   fName: "",
  //   lName: "",
  //   email: "",
  //   password: "",
  //   passwordConf: "",
  //   street: "",
  //   unit: "",
  //   city: "",
  //   state: "",
  //   lucky: true
  // });
  user: User = new User();

  users: Array<User> = [];
  counter: boolean = false;

  onSubmit(event: Event): void{
    this.counter = true;
    event.preventDefault();
    console.log(this.user);
    this.users.push(this.user);
    console.log(this.users);
    this.user = new User();
  }
  constructor() { }

  ngOnInit() {
  }

}
