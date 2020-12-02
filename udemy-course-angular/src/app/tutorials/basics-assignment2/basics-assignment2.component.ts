import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics-assignment2',
  templateUrl: './basics-assignment2.component.html',
  styleUrls: ['./basics-assignment2.component.css']
})
export class BasicsAssignment2Component implements OnInit {
  username :string = "Prajat"
  constructor() { }

  ngOnInit(): void {
  }
  setUsernameEmpty(){
    this.username = ""
  }
}
