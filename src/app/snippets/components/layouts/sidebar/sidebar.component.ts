import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  toggleSidebar(){
    document.getElementById("sidebar").classList.toggle('active');
  }
  ngOnInit() {
  }

}
