import { Component, OnInit } from '@angular/core';
import {ReportGroup} from '../../class/report';
import {ReportService} from '../../service/report.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  model: ReportGroup;
  modelCollection: ReportGroup[];

  view;
  constructor(private reportserv: ReportService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.getReportGroups();
    this.view = 0;
  }
  nextPage(){
    this.view = 1;
  }
  prevPage(){
    this.view = 0;
  }
  viewPage(){
    this.view = 2;
  }

  Cancel() {
    this.view = 0;

  }
  configure() {
    this.model = {}
    this.view = 1;
  }

  getReportGroups() {
      this.reportserv.getReportGroups().subscribe(response => {
        this.modelCollection = response.data;
        console.log(this.modelCollection)        
      });
  }


  selectedReportGroup
  // getSelectedReports(reportGroupId){
  //   this.reportserv.getReportGroup(reportGroupId).subscribe((res)=>{
  //     this.selectedReport = res.data
  //     console.log(this.selectedReport.reports)
  //   })

  // }

  Delete(reportGroupId) {
    this.reportserv.deleteReportGroup(reportGroupId).subscribe((response => {
      this.modelCollection = this.modelCollection.filter(mdl => mdl.id != reportGroupId);
      this.ngOnInit();
    }), (error) => {
      console.log(error, reportGroupId);
    });
  }

  update(reportGroupId) {
    this.reportserv.getReportGroup(reportGroupId).subscribe((res) => {
      this.model = res.data;
      this.selectedReportGroup = this.model.reports;
    });
    this.view = 1;
  }
  viewReportGroup(reportGroup) {
    // this.reportserv.getReportGroup(reportGroupId).subscribe((res) => {
    //   this.model = res.data;
    //   this.selectedReportGroup = this.model.reports;
    //   console.log(this.model.name);
    //   console.log('............................',this.selectedReportGroup);
    // });
    // this.view = 2;
    // this.router.navigateByUrl('/report?y='+ this.selectedReportGroup);
    this.reportserv.setter(reportGroup)
    this.router.navigate(['/report']);
    console.log(reportGroup)
    
  }


  processForm() {
    debugger
    if (this.model.id == undefined) {
      this.reportserv.createReportGroup(this.model).subscribe((group) => {
        this.view = 1;
        console.log(group);
        this.ngOnInit();
      }, (error) => {
        console.log(error);
      });
    } else {
      this.reportserv.updateReportGroup(this.model).subscribe((group) => {
        console.log(group);
        this.view = 1;
        this.ngOnInit();
      }, (error) => {
        console.log(error);
      });
    }
  }

}
