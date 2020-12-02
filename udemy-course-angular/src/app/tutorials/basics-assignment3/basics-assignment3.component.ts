import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics-assignment3',
  templateUrl: './basics-assignment3.component.html',
  styleUrls: ['./basics-assignment3.component.css']
})
export class BasicsAssignment3Component implements OnInit {

  buttonClicked: boolean = false;
  clickCounter = 0;
  clicks = [];
  constructor() { }

  ngOnInit(): void {
  }
  onButtonClick(){
    this.buttonClicked = true;
    this.clickCounter ++;
    this.clicks.push(this.clickCounter);
  }

  getBackgroundColor(click) {
    if (click >5){
      return 'blue'
    } else {
      return 'white'
    }
  }
}
