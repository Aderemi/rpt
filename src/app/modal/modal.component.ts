import { Component, OnInit } from '@angular/core';

import * as QuillNamespace from 'quill';
let Quill: any = QuillNamespace;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  

  quillEditor: any;



  
  constructor() { }

   f(){
    var el=document.getElementById('example');
    var all=el.getElementsByTagName('input');
      
    var inp, i=0;
    while(inp=all[i++]) {
    // alert(inp.name);
    inp.disabled=true;
    }
    }
 


  ngOnInit() {
    // function maxLength(el) {
    //   if (!('maxLength' in el)) {
    //     var max = el.attributes.maxLength.value;
    //     el.onkeypress = function() {
    //       if (this.value.length >= max) return false;
    //     };
    //   }
    // }    
    // maxLength(document.getElementById("input"));
    // document.getElementById('input').onkeyup =   
    // function () {
    //   document.getElementById('count').innerHTML = "Characters: " + (0 + this.value.length);
    // };

}
}
