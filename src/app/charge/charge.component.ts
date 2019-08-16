import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { ChargeService } from './charge.service';
// import { Charge } from './charge';


@Component({
  selector: 'app-charge',
  templateUrl: './charge.component.html',
  styleUrls: ['./charge.component.css']
})
export class ChargeComponent implements OnInit {
//  @Input() instrumentRegister  : InstrumentRegister;
  // charge:Charge = new Charge(); 
  
  constructor(private router:Router
    // , private chargeService:ChargeService
    , private activatedRoute:ActivatedRoute
    ) { }

  // createCharge(){
  //   this.chargeService.newCharge(this.charge).subscribe(data =>{
  //     console.log('Successfully created charge');
  //     this.router.navigate(['/charges']);

  //   }),(err=>{
  //     console.log('could not create a charge')
  //   })
  // }


  // linkUrl(url: string){
  //   this.router.navigate([url])
  // }
  // getChargeById(id){
  //   this.chargeService.getCharge(id).subscribe(data=>{
  //     this.charge=data;

  //   })
  // }
  // cancel(){
  //   this.router.navigate(['/charges']);
  // }
  ngOnInit() {
  //   this.activatedRoute.params.subscribe((data) => {
  //     console.log(data.id);
  //     this.charge.id = data.id;
  //     this.getChargeById(this.charge.id);
  // });
 

}
}