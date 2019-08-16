import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PartyCategoryService } from './party-category.service';
import { PartyCategory } from './party-category';

@Component({
  selector: 'app-party-category',
  templateUrl: './party-category.component.html',
  styleUrls: ['./party-category.component.css']
})
export class PartyCategoryComponent implements OnInit {
  party:PartyCategory = new PartyCategory(); 
  
  constructor(private router:Router, private partyService:PartyCategoryService, private activatedRoute:ActivatedRoute) { }

  // createParty(){
  //   this.partyService.newParty(this.party).subscribe(data =>{
  //     console.log('Successfully created party');
  //     this.router.navigate(['/charges']);

  //   }),(err=>{
  //     console.log('could not create a charge')
  //   })
  // }

  // linkUrl(url: string){
  //   this.router.navigate([url])
  // }
  // getPartyById(id){
  //   this.partyService.getParty(id).subscribe(data=>{
  //     this.party=data;

  //   })
  // }
  // cancel(){
  //   this.router.navigate(['/charges']);
  // }
  ngOnInit() {
    // this.activatedRoute.params.subscribe((data) => {
    //   console.log(data.id);
    //   this.party.id= data.id;
    //   this.getPartyById(this.party.id);
  // });
 

}
}
