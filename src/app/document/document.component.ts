import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InstrumentRegister } from '../registration/registration';
import { DocumentService } from './document.service';


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
@Input() instrumentRegister : InstrumentRegister;
@Input() enableFromParent : boolean;
  document:any = new Document(); 
  
  constructor(private router:Router, private documentService:DocumentService, private activatedRoute:ActivatedRoute) { }

  createDocument(){
    this.document.instrumentRegister = this.instrumentRegister;
    // this.documentService.newDocument(this.document).subscribe(data =>{
    //   console.log('Successfully created document');
    //   this.router.navigate(['/documents']);
    // }),(err=>{
    //   console.log('could not create a document')
    // })
  }

  linkUrl(url: string){
    this.router.navigate([url])
  }
  getDocumentById(id){
    // this.documentService.getDocument(id).subscribe(data=>{
    //  this.document  = data;

    // })
  }
  cancel(){
    this.router.navigate(['/documents']);
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((data) => {
      console.log(data.id);
      this.document.id = data.id;
      this.getDocumentById(this.document.id);
  });
 

}

}
