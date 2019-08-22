import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/service/report.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ReportTemplate } from 'src/app/class/report';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  view 
  templates
  dbms
  tem
  template
  // template:ReportTemplate = new ReportTemplate();
  constructor( private reportserv:ReportService, private router:Router, private route:ActivatedRoute,) { }

  ngOnInit() {
    this.view = 0;
    this.getTemplates();

  }

  

  getTemplates(){
    this.reportserv.getTemplates().subscribe(response =>{
      this.templates = response.data;
    })
    console.log(this.templates)
  }



  Delete(templateId){
    this.reportserv.deleteTemplate(templateId).subscribe((response=>{
      this.templates = this.templates.filter(template => template.id != templateId);
       this.ngOnInit();
    }),(error) => {
      console.log(error, templateId);
    });
    }

    updateTemplate(templateId){
      this.reportserv.getTemplate(templateId).subscribe((res)=>{
        this.tem = res.data
        console.log(this.tem)
      });
      this.view = 1;
    }


  processForm(){
    console.log(this.tem)
    if(this.template.id==undefined){
    this.reportserv.createTemplate(this.tem).subscribe((template)=> {
      this.view = 1;
      console.log(template);
      this.ngOnInit();
    },(error)=> {
      console.log(error);
    });
}else{
  this.reportserv.updateTemplate(this.tem).subscribe((template)=> {        
    console.log(template);
    this.view = 1;
    this.ngOnInit();
  },(error)=> {
    console.log(error);
  });
}
  }

  configure(){
    this.view = 1
      this.tem = {}  
  }
  Cancel(){
    this.view = 0
  }
}
