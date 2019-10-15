import {Component, Inject, OnInit} from '@angular/core';
import {ReportService} from 'src/app/service/report.service';
import {Router, ActivatedRoute} from '@angular/router';
import {environment} from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import {DOCUMENT} from "@angular/common";

declare var $:any;
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})

export class TemplateComponent implements OnInit {
  view;
  previewTemp;
  templates;
  dbms;
  tem;
  template;
  editorData;
  isBuilder = true;
  private selectedLink;
  file:File;

  // template:ReportTemplate = new ReportTemplate();
  constructor(private reportserv: ReportService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService, @Inject(DOCUMENT)  private document: Document) {
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

  getTemplateHtml(templateId) {
    this.reportserv.getTemplateHtml(templateId).subscribe(response => {
       this.document.getElementById("template-view-panel").innerHTML = response.data.html;
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
      this.view = 1;
      this.attachBuilder();
    });
  }

  getPlaceholder(blocks: any[]) {
    const placeholders = [];
    blocks.forEach(block => {
      if (block.template == 'Embed') {
        block.fields.forEach(field => {
          if (field.type == 'placeholder') {
            placeholders.push(Number(field.queryId));
          }
        });
      }
    });
    return placeholders;
  }

  form
  processForm() {
    if (this.isBuilder ){
      this.tem.placeholders = this.getPlaceholder(this.editorData.blocks);
      this.tem.jsonContent = JSON.stringify(this.editorData.blocks);
      this.tem.html = this.editorData.html;
    }

    if (this.tem.id == undefined) {
      this.reportserv.createTemplate(this.tem).subscribe((template) => {
        this.view = 0;
        this.form = 'saved';
        this.toastr.success( this.form, 'Successfully uploaded!', {
          timeOut: 4000
        });
        this.ngOnInit();
      }, (error) => {
        this.form = 'failed';
        this.toastr.success( this.form, 'to save!', {
          timeOut: 4000
        });
        console.log(error);
      });
    } else {
      this.reportserv.updateTemplate(this.tem).subscribe((template) => {
        this.view = 0;
        this.form = 'saved';
        this.toastr.success( this.form, 'Successfully uploaded!', {
          timeOut: 4000
        });
        this.ngOnInit();
      }, (error) => {
        this.form = 'failed';
        this.toastr.success( this.form, 'to save!', {
          timeOut: 4000
        });
        console.log(error);
      });
    }
  }


  configure() {
    this.view = 1;
    this.tem = {};
    this.attachBuilder();
    this.uploadState = 'Empty';
  }

  attachBuilder() {
    const self = this;
    $.getScript('assets/js/ZBuilder/jquery.zbuilder.js', function () {
      $.getScript('assets/js/ZBuilder/locales/jquery.zbuilder.en.js', function () {
        $('#zb-editor').zbuilder({
          ignoreHtml: true,
          blocksUrl: environment.api + 'api/report/template/' + self.tem.id + '/initial-block.json',
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


  setradio(e: string): void {
    this.selectedLink = e;
    if (e == 'manually') {
      this.isBuilder =  true;
      this.attachBuilder();
    } else {
      this.isBuilder = false;
    }
  }

  isSelected(name: string): boolean {
      return (this.selectedLink === name); // if current radio button is selected, return true, else return false
  }
  base64String;
  uploadState = 'Empty';

  onFileChange(event) {
    const self = this;
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      // uploading
      self.file = event.target.files[0];
      self.uploadState = 'Uploading...'+ self.file.name;
      reader.readAsDataURL(self.file);
      reader.onload = () => {
        // done
        self.uploadState = 'Upload Done!!!'+ self.file.name;
        self.toastr.success( self.file.name, 'Successfully uploaded!', {
          timeOut: 4000
        });
        self.tem.fileContent = reader.result;
      };
      reader.onerror = function (error) {
        // error
        self.uploadState = 'Error!!!';
        self.toastr.error( self.file.name, 'failed to uploaded!', {
          timeOut: 4000
        });
        throw new Error(reader.error.toString());
      };
      };
    }
  // }

  // getFile(){
  //   const self = this;
  //   document.getElementById('add-file').addEventListener('click', function() {
  //     let files = document.getElementById('file').files;
  //     if (files.length > 0) {
  //       getBase64(files[0]);
  //     }
  //   });
  //   function getBase64(file) {
  //      let reader = new FileReader();
  //      reader.readAsDataURL(file);
  //      reader.onload = function () {
  //        self.tem.file_content = reader.result;
  //      };
  //      reader.onerror = function (error) {
  //        throw new Error(reader.error.toString());
  //      };
  //   }
  // }
}
