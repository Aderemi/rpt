import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { Checklist } from './checklist';
import { ChecklistService } from './checklist.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  // checklist:Checklist = new Checklist();
  // constructor(private router:Router, private checklistService:ChecklistService, private activatedRoute:ActivatedRoute ) { }

  // createChecklist(){
  //   this.checklistService.newChecklist(this.checklist).subscribe(data=>{
  //     console.log('Checklist created');
  //     this.router.navigate(['/checklists'])

  //   }),(err =>{
  //     console.log('Could not create checklist');
  //   });
  // }
  // cancel(){
  //   this.router.navigate(['/checklists'])
  // }

  // linkUrl(url: string){
  //   this.router.navigate([url])
  // }
  // getChecklistById(id){
  //   this.checklistService.getChecklist(id).subscribe(data=>{
  //     this.checklist=data;

  //   })
  // }
  
  ngOnInit() {
  //   this.activatedRoute.params.subscribe((data) => {
  //     console.log(data.id);
  //     this.checklist.id = data.id;
  //     this.getChecklistById(this.checklist.id);
  // });
 

}
  

}
