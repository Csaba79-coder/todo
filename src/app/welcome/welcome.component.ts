import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../app.component';
// CTRL + p you can choose the file name with typing!
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  messageWelcome = 'This is a welcoma message!'
  text : string = "Hello this is text String!"

  constructor() { }

  ngOnInit(): void {
    console.log(this.messageWelcome)
    console.log(this.text)
  }

  //ngOnInit(): String { // after colon or double-dot you can find the returning value or void it it is not returns anything back!
  //
  //}

}

export class Class1 {

}

export class Class2 {

}
