import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-instrumentprocessing',
  templateUrl: './instrumentprocessing.component.html',
  styleUrls: ['./instrumentprocessing.component.css']
})
export class InstrumentprocessingComponent implements OnInit {

  collapseToggle: boolean = false;

  constructor(private render: Renderer2) { }

  ngOnInit() {
  }

  scroll(el: HTMLElement){
    let jboy = el.offsetTop - 55;
    window.scroll({ top: jboy, behavior: "smooth" });
  }

  collaps(el : HTMLElement){
    // let listGroup = document.getElementById("itemsDiv");
    // let h2section = document.getElementById("sectionDiv");
    // let fixedSideBar = document.getElementById("fixed-side-container")
    // let ico = document.getElementById('ico');
    // if(!this.collapseToggle){
    //   listGroup.style.display = 'none';
    //   h2section.style.display = 'none';
    //   fixedSideBar.style.width = 'auto';
    //   ico.className = 'flaticon-home';
    //   el.className = 'col-md-1';

    //   this.collapseToggle = true;
    // }else{
    //   listGroup.style.display = 'block';
    //   h2section.style.display = 'block';
    //   fixedSideBar.style.width = '19%';
    //   ico.className = 'flaticon-arrow';
    //   el.className = 'col-md-3';
    //   this.collapseToggle = false;
    // }
  }

  // rever(el:HTMLElement){
  //   console.log(">?>>>>>", el)
  //   this.collapseToggle = false;
  // }

}
