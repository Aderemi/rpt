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
  targets
  showFields
  options

 

    
  


  config = {
    displayKey:"description", //if objects array passed which key to be displayed defaults to description
    search:true, //true/false for the search functionlity defaults to false,
    height: '200px' ,//height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    width: '300px' ,//height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    placeholder:'Select options', // text to be displayed when no item is selected defaults to Select,
    customComparator: ()=>{}, // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
    // limitTo: this.options.length ,// a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
    moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'No results found!' ,// text to be displayed when no items are found while searching
    searchPlaceholder:'Search' ,// label thats displayed in search input,
    searchOnKey: 'name' // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
    }


  constructor( private reportserv:ReportService, private router:Router, private route:ActivatedRoute,) { }





  ngOnInit() {
    this.view = 0;
    this.getConnections()
    this.getQueries();
    this.targets = 1
    this.showFields = 0

    this.options =[
      {id: 1 , description: 'Adding new item0'},
      {id: 2 , description: 'Adding new item1'},
      {id: 3 , description: 'Adding new item2'},
      {id: 4 , description: 'Adding new item3'},
      {id: 5 , description: 'Adding new item4'},
      {id: 6 , description: 'Adding new item5'},
      {id: 7 , description: 'Adding new item6'},
      {id: 8 , description: 'Adding new item7'},
    ]
   

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
  table(){
    this.targets = 1
  }
  column(){
    this.targets = 2

  }
  filter(){
    this.targets = 3

  }
  groupBy(){
    this.targets = 4
  }
  orderBy(){
    this.targets = 5

  }
  limit(){
    this.targets = 6

  }
  
  showExtraFields(){
    this.showFields = 1
  }

 

}
