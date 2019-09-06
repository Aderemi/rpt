import {Component, OnInit} from '@angular/core';
import {ReportService} from 'src/app/service/report.service';
import {Router, ActivatedRoute} from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})

export class TemplateComponent implements OnInit {
  view;
  templates;
  dbms;
  tem;
  template;
  editorData;
  // template:ReportTemplate = new ReportTemplate();
  constructor(private reportserv: ReportService, private router: Router, private route: ActivatedRoute, ) {
  }

  ngOnInit() {
    this.view = 0;

    this.getTemplates();
  }

  getTemplates() {
    this.reportserv.getTemplates().subscribe(response => {
      this.templates = response.data;
      console.log(this.templates);
    });
  }


  Delete(templateId) {
    this.reportserv.deleteTemplate(templateId).subscribe((response => {
      this.templates = this.templates.filter(template => template.id != templateId);
      this.ngOnInit();
    }), (error) => {
      console.log(error, templateId);
    });
  }

  updateTemplate(templateId) {
    this.reportserv.getTemplate(templateId).subscribe((res) => {
      this.tem = res.data;
      console.log(this.tem);
    });
    this.view = 1;
  }

  getPlaceholder(blocks: any[]) {
    const placeholders = [];
    blocks.forEach(block => {
      if (block.template == 'Embed') {
        block.fields.forEach(field => {
          if (field.type == 'placeholder') {
            placeholders.push(field.name);
          }
        });
      }
    });
    return placeholders;
  }

  processForm() {
    this.tem.placeholders = this.getPlaceholder(this.editorData.blocks);
    this.tem.jsonContent = JSON.stringify(this.editorData.blocks);
    this.tem.html = this.editorData.html;
    console.log(this.tem);
    if (this.tem.id == undefined) {
      this.reportserv.createTemplate(this.tem).subscribe((template) => {
        this.view = 1;
        this.ngOnInit();
      }, (error) => {
        console.log(error);
      });
    } else {
      this.reportserv.updateTemplate(this.tem).subscribe((template) => {
        this.view = 1;
        this.ngOnInit();
      }, (error) => {
        console.log(error);
      });
    }
  }


  configure() {
    this.view = 1;
    this.tem = {};
    const self = this;
    $.getScript('assets/js/ZBuilder/jquery.zbuilder.js', function () {
      $.getScript('assets/js/ZBuilder/locales/jquery.zbuilder.en.js', function () {
        $('#zb-editor').zbuilder({
          ignoreHtml: true,
          blocksUrl: '/api/report/query/initialblock.json',
          templatesUrl: 'assets/js/ZBuilder/templates/templates.html',
          onChange: function (data) {
            self.editorData = data;
          }
        });
      });
    });
  }

  Cancel() {
    this.view = 0;
  }
}
