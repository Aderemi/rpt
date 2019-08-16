import { Component, OnInit } from '@angular/core';
// import { ForexSource } from './forex-source';
import { ForexSourceService } from './forex-source.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forex-source',
  templateUrl: './forex-source.component.html',
  styleUrls: ['./forex-source.component.css']
})
export class ForexSourceComponent implements OnInit {

  // fxSource:ForexSource = new ForexSource();
  // fxSources:ForexSource[] = [];
  showForm:number;
  // selectedFxSource:ForexSource;
  code:boolean;
  navItem:any;
  constructor(private fxSourceService:ForexSourceService,private router:Router,
    private activatedRoute: ActivatedRoute,) {
    this.showForm = 0;
   }

  ngOnInit() {
    // this.getAllForexSources()
  }

  createForexSource(){
  //   console.log("I am here")
  //   this.fxSourceService.createFxSource(this.fxSource).subscribe(data=>{
  //     console.log("Successful")
      this.showForm = 0;
  //     this.fxSource = new ForexSource();
  //     this.ngOnInit();
  //     //this.router.navigate(['forexSource']);
  //   }),(err=>{
  //     console.log("Error creating forex source")
  //   })
  }

  forexSourceActions(event){
  //   console.log(event.path[0].innerText)
    if (event.path[0].innerText == 'Add'){
      this.showForm = 1;
     
    }
    else if (event.path[0].innerText == 'Modify'){
      this.showForm = 1;
    
  //     this.getOneFxSource();
     
  //     this.code = true;
    }
  }

  // getAllForexSources(){
  //   this.fxSourceService.getFxSources().subscribe(data=>{
  //     this.fxSources = data;
  //   })
  // }

  // getFilter(){
  //   this.fxSourceService.query(this.fxSource).subscribe(data=>{
  //     this.fxSources = data;
  //   })
  // }
  // set(fxSource){
  //   this.selectedFxSource = fxSource;
  //   console.log("Selected fxSource", this.selectedFxSource)
  // }
  // getOneFxSource(){
  //   console.log("See    eeee",this.fxSource.id, "selected ", this.selectedFxSource.id)
  
  //   this.fxSourceService.getFxSource(this.selectedFxSource.id).subscribe(data=>{
  //     this.fxSource = data;
  //     console.log("data selected",this.fxSource);
  //   })
  // }

}
