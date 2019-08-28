import { Component, OnInit } from '@angular/core';
import {ReportGroup} from '../../class/report';
import {ReportService} from '../../service/report.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  model: ReportGroup;
  modelCollection: ReportGroup[];

  view;
  constructor(private reportserv: ReportService) { }

  ngOnInit() {
    this.getReportGroups();
    this.view = 0;
  }

  Cancel() {
    this.view = 0;

  }
  configure() {

    this.view = 1;
  }

  getReportGroups() {
      this.reportserv.getReportGroups().subscribe(response => {
        this.modelCollection = response.data;
      });
  }

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
      console.log(this.model);
    });
    this.view = 1;

  }


  processForm() {
    if (this.model.id == undefined) {
      this.reportserv.createConnection(this.model).subscribe((group) => {
        this.view = 1;
        console.log(group);
        this.ngOnInit();
      }, (error) => {
        console.log(error);
      });
    } else {
      this.reportserv.updateConnection(this.model).subscribe((group) => {
        console.log(group);
        this.view = 1;
        this.ngOnInit();
      }, (error) => {
        console.log(error);
      });
    }
  }

}
