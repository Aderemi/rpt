import { Component, OnInit } from '@angular/core';
import { MilestoneService } from '../service/milestone.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Milestone } from '../class/milestone';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

  // milestones:Milestone;
  milestones:Milestone[] = [];
  milestone_:Milestone = new Milestone();
  milestone:Milestone;
  deleteOneMilestone : boolean;
  message:any;


  text:any;
  count:any;
  // value:any;
  values:any;
  constructor( private service:MilestoneService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {

    this.getMilestones();
    this.milestone=this.service.getter();
  }

  getMilestones(){
    this.service.getMilestones().subscribe(response=>{
      this.milestones = response;
      console.log(response);
    })
  }


  deleteMilestone(milestone){
    this.service.deleteMilestone(milestone.id).subscribe((response=>{
      this.milestones.splice(this.milestones.indexOf(milestone),1);
      alert("you have deleted question"+"  " +milestone.id);
      this.deleteOneMilestone = true;
     if(this.deleteOneMilestone = true){
       this.message = "delete successful!!!";
     } else{
      this.message = "delete unsuccessful!!!"
     }
    }),(error) => {
      console.log(error);
    });
    }

    updateMilestone(milestone){
      this.milestone = milestone;
      //  this.service.setter(milestone);
        console.log('update' + milestone.id, milestone.milestoneType);
    }

    createMilestone(){
    let milestone = new Milestone();
    this.service.setter(milestone);

    }

    processForm(){
      if (this.milestone.id==undefined){
        this.service.createMilestone(this.milestone).subscribe((milestone)=> {
          console.log(milestone);
          this.ngOnInit();
        },(error)=> {
          console.log(error);
        });
      }else{
        this.service.updateMilestone(this.milestone).subscribe((milestone)=> {
          console.log(milestone);
          this.ngOnInit();
        },(error)=> {
          console.log(error);
        });
      }
    }


  onKey(value: string) {
    this.values = 0 + value.length
    if (this.values >= 100){
      alert("you have exceeded the max amount of characters!!!");
      document.getElementById('input').style.borderColor = 'red !important';
    }else{
      document.getElementById('input').style.borderColor = 'none';
    }
  }

}
