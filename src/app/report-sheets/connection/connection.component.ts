import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/service/report.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportConnection } from 'src/app/class/report';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})

export class ConnectionComponent implements OnInit {

  view
  connections
  dbms
  conn
  connection:ReportConnection = new ReportConnection();

  constructor( private reportserv:ReportService, private router:Router, private route:ActivatedRoute,) { }

  ngOnInit() {
    this.getConnections();
    this.getDBMS();
    this.view = 0
  }
  getDBMS(){
    this.reportserv.getDBMS().subscribe(response=>{
      this.dbms = response;
      console.log(this.dbms);
    })

  }

  getConnections(){
    this.reportserv.getConnections().subscribe(response =>{
      this.connections = response.data;
    })
  }

  Change(event) { 
    const subValue = event.target.value;
    // this.connections.data.dbms = subValue;
    this.connection.dbms = subValue;
    console.log(subValue)
  }

  Delete(connectionId){
    this.reportserv.deleteConnection(connectionId).subscribe((response=>{
      this.connections = this.connections.filter(connection => connection.id != connectionId);
       this.ngOnInit();
    }),(error) => {
      console.log(error, connectionId);
    });
    }

    updateConnection(connectionId){
      this.reportserv.getConnection(connectionId).subscribe((res)=>{
        this.conn = res.data
        console.log(this.conn)
      });
      this.view = 1;
      
    }


  processForm(){
    console.log(this.conn)
    if(this.connection.id==undefined){
    this.reportserv.createConnection(this.conn).subscribe((connection)=> {
      this.view = 1;
      console.log(connection);
      this.ngOnInit();
    },(error)=> {
      console.log(error);
    });
}else{
  this.reportserv.updateConnection(this.conn).subscribe((connection)=> {        
    console.log(connection);
    this.view = 1;
    this.ngOnInit();
  },(error)=> {
    console.log(error);
  });
}
  }

  Cancel(){
    this.view = 0

  }
  configure(){
    this.conn = {}
    this.view = 1
  }

  f(){
    var el=document.getElementById('example');
    // var all=el.getElementsByTagName('input');
    var all = el.getElementsByClassName('dis')
      
    var inp, i=0;
    while(inp=all[i++]) {
    inp.disabled=true;
    }
    }

}
