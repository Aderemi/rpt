import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/service/report.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ReportQueries, ReportConnection } from '../../class/report';

@Component({
  selector: 'app-query-builder',
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.css']
})
export class QueryBuilderComponent implements OnInit {


  drone = 'manually'
  isManual = true;
  view;
  views;
  values = [
    { id: 3432, name: "Zenith conn" },
    { id: 3442, name: "Kachasi Default" },
    { id: 3352, name: "Logging Database" },
  ];
  tables = ['User','Balance', 'Log', 'Track'];
  rem;
  list;
  display:any
  displays:any
  isValue:boolean
  isValues:boolean
  isShow:boolean = false;
  isShows:boolean = false;
  disable:boolean = false;
  user:string = 'User ID';
  connections;
  queries;
  datas
  query:ReportQueries = new ReportQueries();
  h
  queryData
  que


  constructor( private reportserv:ReportService, private router:Router, private route:ActivatedRoute,) { }

  ngOnInit() {
    this.view = 0;
    this.getConnections()
    this.getQueries();
    // this.query = this.reportserv.getter();

    this.datas = [
      {name: 'Tiger Nixon', Position:'System Architect', Office:'Edinburgh', Age:'61', Date:'2011/04/25', Salary:'$320,800' } ,
      {name:'Garrett Winters',  Position:'Accountant', Office:'Tokyo', Age:'63', Date:'2011/07/25', Salary:'$170,750' },
      {name: 'Ashton Cox', Position:'Junior Technical Author', Office:'San Francisco', Age:'66', Date:'2009/01/12', Salary:'$86,000' },
     {name:'Cedric Kelly', Position:'Senior Javascript Developer', Office:'Edinburgh', Age:'22', Date:'2012/03/29', Salary: '$433,060' },
       {name:'Airi Satou', Position:'Accountant', Office:'Tokyo', Age:'33', Date:'2008/11/28', Salary: '$162,700' },
       {name:'Brielle Williamson', Position:'Integration Specialist', Office:'New York', Age:'61', Date:'2012/12/02', Salary:'$372,000'  },
       {name:'Herrod Chandler', Position:'Sales Assistant', Office:'San Francisco', Age:'59', Date:'2012/08/06', Salary: '$137,500' },
       {name:'Rhona Davidson',  Position:'Integration Specialist', Office:'Tokyo', Age:'55', Date:'2010/10/14', Salary: '$327,900'},
       {name:'Colleen Hurst', Position:'Javascript Developer', Office:'San Francisco', Age:'39', Date:'2009/09/15', Salary:'$205,500'  },
       {name:'Sonya Frost',  Position:'Software Engineer', Office:'Edinburgh', Age:'23', Date:'2008/12/13', Salary:'$103,600' },
       {name:'Jena Gaines',  Position:'Office Manager', Office:'London', Age:'30', Date:'2008/12/19', Salary:'$90,560' },
       
     ]
  }

  populate(){
    this.h = 1
  }
 getConnections(){
    this.reportserv.getConnections().subscribe(response =>{
      this.connections = response.data;
      console.log(this.connections)
    })
  }
  getQueries(){
    this.reportserv.getQueries().subscribe(response=>{
      this.queries = response.data;
      console.log(this.queries);
    })
  }

  Change(event) { 
    const subValue = event.target.value;
    this.isValues = true;
    this.disable = true
    let del 
    if ( subValue === event.target.value ){
    for( var i = 0; i < this.tables.length; i++){ 
      if ( this.tables[i] === event.target.value) {
       this.rem = this.tables.splice(i, 1); 
      }
   }
    }
    console.log(this.rem);
  }

  booleanVal : boolean = false;
  onChange(event){
    console.log("MFGG>>>", event)
    this.booleanVal = !this.booleanVal 
  
  }
  targetVal

  private selectedLink        
  
  setradio(e: string): void{  
  
    this.selectedLink = e;  
    if(e == 'manually'){
      this.isManual =  true;
    }else{
      this.isManual = false;
    }
          
  }  
  
    isSelected(name: string): boolean {  
  
        return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
    } 



  enable(){
    this.disable = false;
    this.isShow = true;

  }

  configure(){
    this.que = {}
    this.view = 1;
  }

  Save(){
    this.h = 0;
  }

  Cancel(){

    this.view = 0;

  }
  Delete(queryId){
    this.reportserv.deleteQuery(queryId).subscribe((response=>{
      this.queries = this.queries.filter(query => query.id != queryId);
    }),(error) => {
      console.log(error, queryId);
    });
    }

conn
    updateQuery(queryId){
      debugger
      this.reportserv.getQuery(queryId).subscribe((res)=>{
        this.que = res.data
        console.log(this.que)
      });
      this.view = 1;
    }

   

  processForm(){
      console.log(this.que)
      if(this.query.id==undefined){
      this.reportserv.createQuery(this.que).subscribe((query)=> {
        this.view = 0;
        console.log(query);
      },(error)=> {
        console.log(error);
      });
    }else{
        this.reportserv.updateQuery(this.que).subscribe((query)=> {        
          console.log(query);
          this.view = 0;
        },(error)=> {
          console.log(error);
        });
      }
  }

}
