import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  firstData
  secondData
  data
  thirdData
  operator
  show
  display
  constructor() { }

  ngOnInit() {
    this.firstData = ['and','or','-','and(',')and','or(',')or',')',') and(',') or(','(',];
    this.secondData = ['Flag','Value','String','Date','Integer','Party','List'];
    this.data = ['populated from backend'];
    this.thirdData = ['Specific value','Event field'];
    this.operator = ['=','<>', '>','<','<=','>=']
  }

  setEvent(event){
   console.log(event.target.value);
   let value = event.target.value
   if( value === 'Event field' ){
     this.show = 1;
   }else{
    this.show = 2;
   }

  }

  setValue(event){
    console.log(event.target.value);
    let value = event.target.value
    if ( value === 'Value'){
      this.display = 1;
    }else{
      this.display = 0;

    }
  }

}
