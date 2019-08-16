import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response, Report, ReportConnection, ReportQueries } from '../class/report';



@Injectable({
  providedIn: 'root'
})
export class ReportService {

  // private query: ReportQueries;
  private query: ReportQueries = new ReportQueries();
  private connection:ReportConnection = new ReportConnection();
  baseUrl:String = `http://192.168.1.149:8081/api`;
  
  // private report:Report = new Report();
  // private reportconn:ReportConnection = new ReportConnection();

  constructor(private _http:HttpClient) { }

  getReports(){
    return this._http.get<Response<Report>>(this.baseUrl+ '/reports');
  }
  getReportGroups(){
    return this._http.get<Response<Report>>(this.baseUrl+ '/report/groups');
  }


  getReport(id:number){
    return this._http.get<Response<Report>>(this.baseUrl+ '/report/' + id);
  }
  getReportGroup(id:number){
    return this._http.get<Response<Report>>(this.baseUrl+ '/report/group/' + id);
  }


  createReport(report){
    return this._http.post(this.baseUrl+ '/report/' + report.groupId + "/save" , report);
  }
  updateReport(report){
    return this._http.put(this.baseUrl+ '/report', report);
  }

  deleteReport(id:number){
    return this._http.delete(this.baseUrl+ '/report/' + id);
  }



//Queries
 
  // getQueries(){
  //   return this._http.get<ReportQueries[]>(this.baseUrl+ '/report/queries');
  // }

  // getQuery(id:number){
  //   return this._http.get<ReportQueries[]>(this.baseUrl+ '/report/query/' + id);
  // }
  getQueries(){
    return this._http.get<Response<ReportQueries>>(this.baseUrl+ '/report/queries');
  }
  getQuery(id:number){
    return this._http.get<Response<ReportQueries>>(this.baseUrl+ '/report/query/' + id);
  }
  createQuery(query){
    return this._http.post(this.baseUrl+ '/report/query', query);
  }
  updateQuery(query){
    return this._http.put(this.baseUrl+ '/report/query', query);
  }

  deleteQuery(id:number){
    return this._http.delete(this.baseUrl+ '/report/query/' + id);
  }


  // dbms
  getDBMS(){
    return this._http.get<string[]>(this.baseUrl+ '/report/query/dbms');
  }


//connections

getConnections(){
  return this._http.get<Response<ReportConnection>>(this.baseUrl+ '/report/connections');
}
getConnection(id:number){
  return this._http.get<Response<ReportConnection>>(this.baseUrl+ '/report/connection/' + id);
}

  createConnection(connection){
    return this._http.post(this.baseUrl+ '/report/connection', connection);
  }
  deleteConnection(id:number){
    return this._http.delete(this.baseUrl+ '/report/connection/' + id);
  }

  updateConnection(connection){
    return this._http.put(this.baseUrl+ '/report/connection', connection);
  }



  // setter(query: ReportQueries){
  //   this.query = query;
  // }
  // getter(){
  //   return this.query, this.connection; 
    
  // }
  // set _connection(connection:ReportConnection){
  //   this.connection = connection;
  // }

  // get _connection(){
  //   return  this.connection; 
    
  // }
}
