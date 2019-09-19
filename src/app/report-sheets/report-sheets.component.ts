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
import {Report, ReportDownload, ReportGroup, ReportQueries, ReportTemplate} from '../class/report';
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
let pdfMake = require('pdfmake/build/pdfmake.js');
let pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

//@ts-check

@Component({
  selector: 'app-report-sheets',
  templateUrl: './report-sheets.component.html',
  styleUrls: ['./report-sheets.component.css']
})
export class ReportSheetsComponent implements OnInit {
// schedule: once, daily, weekly, monthly and yearly
// start_from: date
// end_by: date optional

  constructor(
    //  private http:HttpClient,
    private reportserv: ReportService, private router: Router, private route: ActivatedRoute,
    private cust: CustomService) { }

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
  drone = 'Individual';
  isManual;
  isIndividual;
  isGroup;
  dtOptions: any = {};
  reportDownload: ReportDownload = {};
  queries: ReportQueries[];
  templates: ReportTemplate[];
  private selectedLink;
  groupReport;
  name
  config = {
    displayKey: 'group', // if objects array passed which key to be displayed defaults to description
    search: true, // true/false for the search functionlity defaults to false,
    height: '250px' , // height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    width: '50px' , // height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    placeholder: 'Select options', // text to be displayed when no item is selected defaults to Select,
    customComparator: () => {}, // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
    // limitTo: this.options.length ,// a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
    moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'No results found!' , // text to be displayed when no items are found while searching
    searchPlaceholder: 'Search' , // label thats displayed in search input,
    searchOnKey: 'name' // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
    };

  ngOnInit() {
    this.view = 0;
    this.views = 0;
    // this.toview = 2;
    this.getReports();
    this.getReportGroups();
    this.radio = 0;
    this.showChecked = 0;
    this.isIndividual =  false;
    this.isGroup = false;
    this.name = this.reportserv.getter().name
    this.groupReport = this.reportserv.getter().reports;
   if (this.groupReport === undefined){
    this.toview = 0;
   } else {
    this.toview = 2;
   }
   this.reportserv.getTemplates().subscribe(response => this.templates = response.data);
   this.reportserv.getQueries().subscribe(response => this.queries = response.data);
  }

  getReports() {
    this.reportserv.getReports().subscribe(response => {
      this.reports = response.data;
    });
  }

  getReportGroups() {
    this.reportserv.getReportGroups().subscribe(response => {
      this.reportgroups = response.data;
    });
  }

  Delete(reportId) {
    this.reportserv.deleteReport(reportId).subscribe((response => {
      this.reports = this.reports.filter(report => report.id != reportId);
    }), (error) => {
      console.log(error, reportId);
    });
  }

  updateReport(reportId) {
    this.reportserv.getReport(reportId).subscribe((res) => {
      this.report = res.data;
      console.log(this.report);
    });
    this.toview = 1;
  }

  Change(event) {
    const subValue = event.target.value;
    this.reportgroups[name] = subValue;
    console.log(subValue);
  }

  processForm() {
    console.log(this.report);
    if (this.report.id == undefined) {
      this.reportserv.createReport(this.report).subscribe((report) => {
        this.toview = 1;
        this.ngOnInit();
      }, (error) => {
        console.log(error);
      });
    } else {
      this.reportserv.updateReport(this.report).subscribe((report) => {
        this.toview = 1;
        this.ngOnInit();
      }, (error) => {
        console.log(error);
      });
    }
  }

  Add() {
    this.report = {};
    this.toview = 1;
  }
  Cancel() {
    this.toview = 0;
    this.ngOnInit();
  }

  checkValue(event: any) {
    console.log(event);
    if (event == 'A') {
      this.showChecked = 1;
    } else {
      this.showChecked = 0;
      this.isIndividual =  false;
      this.isGroup = false;
    }
 }

  setradio(e: string): void {
    this.selectedLink = e;
    console.log(e);
    if (e == 'Individual') {
      this.isIndividual =  true;
      this.isGroup = false;
    } else {
      this.isGroup = true;
      this.isIndividual = true;
    }

  }
  isSelected(name: string): boolean {
      return (this.selectedLink === name); // if current radio button is selected, return true, else return false
  }

  isDisable = false;
  disableDAte(event:any){
    console.log(event.target.value);
    if (event.target.value === 'once'){
      this.isDisable = true;
    }else {
      this.isDisable = false;
    }

  }
}

