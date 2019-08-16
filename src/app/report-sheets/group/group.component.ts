import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  view
  constructor() { }

  ngOnInit() {

    this.view = 0
  }

  Cancel(){
    this.view = 0

  }
  configure(){

    this.view = 1
  }
}
