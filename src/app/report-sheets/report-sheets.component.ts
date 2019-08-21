import { Component, OnInit } from '@angular/core';
// import * as jsPDF from 'jspdf';
// import  'jspdf-autotable';
// import * as autoTable from 'jspdf-autotable';

// import { HttpClient } from "@angular/common/http";
import { CustomService } from '../custom.service';
// import { saveAs } from 'file-saver';
// declare var jsPDF: any;
import * as $ from 'jquery';
// declare var $:any;
import { ReportService } from '../service/report.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Report, ReportGroup } from '../class/report';
declare const require: any;
const jsPDF = require('jspdf');
// require('jspdf-autotable');
// import 'datatables.net-bs4'
require('jszip');
require('pdfmake');
require('datatables.net-bs4');
require('datatables.net-buttons-bs4');
require('datatables.net-buttons/js/buttons.flash.js');
require('datatables.net-buttons/js/buttons.html5.js');
require('datatables.net-buttons/js/buttons.print.js');
require('datatables.net-select-bs4');
var pdfMake = require('pdfmake/build/pdfmake.js');
var pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;



@Component({
  selector: 'app-report-sheets',
  templateUrl: './report-sheets.component.html',
  styleUrls: ['./report-sheets.component.css']
})
export class ReportSheetsComponent implements OnInit {

  view;
  views;
  toview;
  tableWidget;
  datas;
  reports: Report[];
  report: Report;
  reportgroups: ReportGroup[];
  radio;
  showChecked;
  drone = 'Individual'
  isManual;
  isIndividual;
  isGroup


  constructor(
    //  private http:HttpClient, 
    private reportserv: ReportService, private router: Router, private route: ActivatedRoute,
    private cust: CustomService) { }
  dtOptions: any = {};







  ngOnInit() {
    this.view = 0
    this.views = 0
    this.toview = 0
    this.getReports();
    this.getReportGroups();
    this.radio =0;
    this.showChecked = 0;
    this.isIndividual =  false;
    this.isGroup = false

    $(document).ready(function () {
      var table =
        $('#example1').DataTable({

          dom: 'Bfrtip',
          buttons: [
            'print',

            'csvHtml5',
            'pdfHtml5',
          ]
        });

      //     $('#example1 tbody').on( 'click', 'tr', function () {
      //       if ( $(this).hasClass('selected') ) {
      //           $(this).removeClass('selected');
      //       }
      //       else {
      //           table.$('tr.selected').removeClass('selected');
      //           $(this).addClass('selected');
      //       }
      //   } );
      // //   $('#example1 tbody').on( 'click', 'tr', function () {
      // //     $(this).toggleClass('selected');
      // // } );
    });



  //   this.datas = [
  //     { name: 'Tiger Nixon', Position: 'System Architect', Office: 'Edinburgh', Age: '61', Date: '2011/04/25', Salary: '$320,800' },
  //     { name: 'Garrett Winters', Position: 'Accountant', Office: 'Tokyo', Age: '63', Date: '2011/07/25', Salary: '$170,750' },
  //     { name: 'Ashton Cox', Position: 'Junior Technical Author', Office: 'San Francisco', Age: '66', Date: '2009/01/12', Salary: '$86,000' },
  //     { name: 'Cedric Kelly', Position: 'Senior Javascript Developer', Office: 'Edinburgh', Age: '22', Date: '2012/03/29', Salary: '$433,060' },
  //     { name: 'Airi Satou', Position: 'Accountant', Office: 'Tokyo', Age: '33', Date: '2008/11/28', Salary: '$162,700' },
  //     { name: 'Brielle Williamson', Position: 'Integration Specialist', Office: 'New York', Age: '61', Date: '2012/12/02', Salary: '$372,000' },
  //     { name: 'Herrod Chandler', Position: 'Sales Assistant', Office: 'San Francisco', Age: '59', Date: '2012/08/06', Salary: '$137,500' },
  //     { name: 'Rhona Davidson', Position: 'Integration Specialist', Office: 'Tokyo', Age: '55', Date: '2010/10/14', Salary: '$327,900' },
  //     { name: 'Colleen Hurst', Position: 'Javascript Developer', Office: 'San Francisco', Age: '39', Date: '2009/09/15', Salary: '$205,500' },
  //     { name: 'Sonya Frost', Position: 'Software Engineer', Office: 'Edinburgh', Age: '23', Date: '2008/12/13', Salary: '$103,600' },
  //     { name: 'Jena Gaines', Position: 'Office Manager', Office: 'London', Age: '30', Date: '2008/12/19', Salary: '$90,560' },

  //   ]

  }


  getReports() {
    this.reportserv.getReports().subscribe(response => {
      this.reports = response.data;
      console.log(this.reports);
    })
  }
  getReportGroups() {
    this.reportserv.getReportGroups().subscribe(response => {
      this.reportgroups = response.data;
      console.log(this.reportgroups);
    })
  }


  Delete(reportId) {
    this.reportserv.deleteReport(reportId).subscribe((response => {
      this.reports = this.reports.filter(report => report.id != reportId);
      this.ngOnInit();
    }), (error) => {
      console.log(error, reportId);
    });
  }

  updateReport(reportId) {
    this.reportserv.getReport(reportId).subscribe((res) => {
      this.report = res.data
      console.log(this.report)
    });
    this.toview = 1;
  }

  Change(event) { 
    const subValue = event.target.value;
    this.reportgroups[name]= subValue;
    console.log(subValue)
  }

  processForm() {
    console.log(this.report)
    if (this.report.id == undefined) {
      this.reportserv.createReport(this.report).subscribe((report) => {
        this.toview = 1;
        console.log(report);
        this.ngOnInit();
      }, (error) => {
        console.log(error);
      });
    } else {
      this.reportserv.updateReport(this.report).subscribe((report) => {
        console.log(report);
        this.toview = 1;
        this.ngOnInit();
      }, (error) => {
        console.log(error);
      });
    }
  }
  Add() {
    this.report = {}
    this.toview = 1
  }
  Cancel() {
    this.toview = 0
    this.ngOnInit();
  }

  checkValue(event: any){
    console.log(event);
    if(event == 'A'){
      this.showChecked = 1
    }else {
      this.showChecked = 0
      this.isIndividual =  false;
      this.isGroup = false
    }
 }
  
 private selectedLink        
  
  setradio(e: string): void{  
    this.selectedLink = e; 
    console.log(e) 
    if(e == 'Individual'){
      this.isIndividual =  true;
      this.isGroup = false
    }else{
      this.isGroup = true;
      this.isIndividual = true;
    }
          
  }  
    isSelected(name: string): boolean {  
        return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
    } 

  // values = [
  //   { id: 3432, name: "ENTER_MANUALLY" },
  //   { id: 3442, name: "ADMINS" },
  //   { id: 3352, name: "MARKETERS" },
  //   { id: 3362, name: "SALES" }
  // ];

  // downloadPDF() {
  //   let doc = new jsPDF()
  //   doc.autoTable({ html: '#my-table' });
  //   // doc.text('some text here', 10, 10);
  //   console.log(doc)
  //   doc.save('test.pdf')
  // }

  // handleSelected($event) {
  //   if ($event.target.checked === true) {
  //     this.view = 1
  //   } else {
  //     this.view = 0;
  //     this.views = 0;
  //   }
  // }
  // onChange(event) {
  //   const newVal = event.target.value;
  //   if (newVal == this.values[0].id) {
  //     console.log('found it')
  //     this.views = 1
  //   } else {
  //     this.views = 0
  //   }
  //   console.log(newVal, this.values[0].id);
  // }

 
  // downloadFile() {
  //   //this.http.get('https://contactsapi.apispark.net/v1/companies/').subscribe(
  //   this.http.get('https://mapapi.apispark.net/v1/images/Granizo.pdf').subscribe(
  //     (response) => {
  //       let mediaType = 'application/pdf';
  //       let blob = new Blob([response._body], {type: mediaType});
  //       let filename = 'test.pdf';
  //       saveAs(blob, filename);
  //     });
  // }



}
