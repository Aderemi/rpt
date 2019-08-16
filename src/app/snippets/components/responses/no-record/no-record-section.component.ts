import { Component, Input, OnInit } from "@angular/core";
import { isUndefined } from 'util';

@Component({
    selector: 'tdx-norecord',
    templateUrl: './no-record-section.component.html',
    styleUrls: [ './no-record-section.component.css']
})

export class NoRecordSectionComponent implements OnInit{
    
    @Input() message  : string
    @Input() lead : string
    @Input() buttonText  : string
    @Input() url : string

    showLead : boolean = false;

    constructor(){

    }

    ngOnInit(){
        if(isUndefined(this.url)){
            this.url = "/";
        }
        if(!isUndefined(this.lead)){
            this.showLead  = true;
        }

    }
}