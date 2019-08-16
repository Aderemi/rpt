import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.css']
})
export class InstrumentComponent implements OnInit {
  search:boolean = true;

  constructor(private rnd : Renderer2) { }


  ngOnInit() {
    this.search = true;
  }

  showOthers(advanceSearch : HTMLElement){
    this.search = false;    
    this.rnd.removeClass(advanceSearch, 'collapse');
    this.rnd.addClass(advanceSearch, 'collapsing')
    // this.rnd.setStyle(advanceSearch, 'height', '172px')     
    setTimeout(()=>{
      this.rnd.removeClass(advanceSearch, 'collapsing')
      this.rnd.addClass(advanceSearch, 'collapse');
      this.rnd.addClass(advanceSearch, 'show');
      
      this.rnd.removeStyle(advanceSearch, 'height')
    },500)

    setTimeout(() => {
      this.rnd.setStyle(advanceSearch, 'height', '172px') 
    },200)
  
  }


  showSearch(advanceSearch: HTMLElement){
    this.search = true;
    this.rnd.removeClass(advanceSearch, 'collapse');
    this.rnd.removeClass(advanceSearch, 'show');
    this.rnd.addClass(advanceSearch, 'collapsing')
    setTimeout(()=>{
      this.rnd.removeClass(advanceSearch, 'collapsing')
      this.rnd.addClass(advanceSearch, 'collapse')
    }, 500)
  }

 


}
