import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  view: number;
  constructor() {
    this.view = 0;
   }

  ngOnInit() {
  }

  addAccount(){
    this.view = 1;
  }

  cancel(){
    this.view = 0;
  }

}
