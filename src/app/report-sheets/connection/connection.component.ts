import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/service/report.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportConnection } from 'src/app/class/report';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})

export class ConnectionComponent implements OnInit {

  constructor( private reportserv: ReportService, private router: Router, private route: ActivatedRoute,private toastr: ToastrService ) { }

  view;
  connections;
  dbms;
  conn;
  connection: ReportConnection;
  status = 'Disabled';
  message;
  showAlert;
  statusCheck;
  isChecked;


  ngOnInit() {
    this.getConnections();
    this.getDBMS();
    this.view = 0;


  }
  getDBMS() {
    this.reportserv.getDBMS().subscribe(response => {
      this.dbms = response;
      console.log(this.dbms);
    });

  }

  getConnections() {
    this.reportserv.getConnections().subscribe(response => {
      this.connections = response.data;
    });
  }

  Change(event) {
    const subValue = event.target.value;
    this.connection.dbms = subValue;
    console.log(subValue);
  }


 


  Delete(connectionId) {
    this.reportserv.deleteConnection(connectionId).subscribe((response => {
      this.connections = this.connections.filter(connection => connection.id != connectionId);
       this.ngOnInit();
    }), (error) => {
      console.log(error, connectionId);
    });
    }

   
    updateConnection(connectionId) {
      this.reportserv.getConnection(connectionId).subscribe((res) => {
        this.conn = res.data;
       this.statusCheck = this.conn.status
        console.log(this.conn, this.statusCheck);
        this.checkValue(event);
      });
      this.view = 1;

    }

    checkValue(event) {
      debugger;
      if (this.statusCheck === "ACTIVE" || this.statusCheck ===  "Active" ){
        this.isChecked = true;
        this.status = 'Enabled';
      }else{
        event.target.checked = false;
        this.status = 'Disabled';
        this.isChecked = false;        
      }
   }




    testConnection() {
      this.reportserv.testConnection(this.conn).subscribe((res) => {
        let connected = res.data;
        this.message = res.message;
        console.log(res.message, connected);

        if (connected === true){
          this.showAlert = 1;
          this.toastr.success( this.message, 'Connected!', {
            timeOut: 4000
          });
        }else{
          this.showAlert = 0;
          this.toastr.error( this.message, 'Error!', {
            timeOut: 4000
          });
        }
      });
    }


  processForm() {
    if (this.conn.id == undefined) {
    this.reportserv.createConnection(this.conn).subscribe((connection) => {
      this.view = 1;
      console.log(connection);
      this.ngOnInit();
    }, (error) => {
      console.log(error);
    });
} else {
  this.reportserv.updateConnection(this.conn).subscribe((connection) => {
    console.log(connection);
    this.view = 1;
    this.ngOnInit();
  }, (error) => {
    console.log(error);
  });
}
  }

  Cancel() {
    this.view = 0;

  }
  configure() {
    this.conn = {};
    this.view = 1;
  }

  f() {
    let el = document.getElementById('example');
    // var all=el.getElementsByTagName('input');
    let all = el.getElementsByClassName('dis');

    let inp, i = 0;
    while (inp = all[i++]) {
    inp.disabled = true;
    }
    }

}
