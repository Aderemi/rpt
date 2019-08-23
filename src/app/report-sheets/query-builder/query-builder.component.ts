import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import { ReportService } from 'src/app/service/report.service';
import { Router, ActivatedRoute } from '@angular/router';
import {ReportConnection, ReportQueries} from '../../class/report';
import { Oracle10gQBuilder } from '../../../lib/query-builder/Oracle10gQBuilder';
import {DOCUMENT} from '@angular/common';
import {BaseQBuilder} from '../../../lib/query-builder/BaseQBuilder';

@Component({
  selector: 'app-query-builder',
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.css']
})
export class QueryBuilderComponent implements OnInit {

  constructor( private reportserv: ReportService, private router: Router, private route: ActivatedRoute, @Inject(DOCUMENT) private document: Document ) { }
  drone = 'manually';
  oracleQueryBuilder: Oracle10gQBuilder = new Oracle10gQBuilder();
  aggregateValues = {
        'Sum of': ' SUM(_)',
        'Average of': ' AVG(_)',
        'Minimum in': ' MIN(_)',
        'Maximum in': ' MAX(_)',
        'Count of': ' COUNT(_)'
    };

  isManual = true;
  view;
  views;
  values = [
    { id: 3432, name: 'Zenith conn' },
    { id: 3442, name: 'Kachasi Default' },
    { id: 3352, name: 'Logging Database' },
  ];
  tables: string[] = ['Please Select a Connection'];
  rem;
  list;
  display: any;
  displays: any;
  isValue: boolean;
  isValues: boolean;
  isShow = false;
  isShows = false;
  disable = false;
  user = 'User ID';
  connections;
  queries;

  datas;
  h;
  columns: string[] = ['Please Select a Table'];
  queryData;
  que: ReportQueries;
  targets;
  showFields;
  options;
  isDisabled = true;
  @ViewChild('queryPreviewHtml',  { read: ElementRef }) queryPreviewHtml: ElementRef;
  @ViewChild('preview-box',  { read: ElementRef }) previewBox: ElementRef;
  config = {
    // displayKey: 'this.options', // if objects array passed which key to be displayed defaults to description
    search: true, // true/false for the search functionlity defaults to false,
    height: '200px' , // height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    width: '300px' , // height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    placeholder: 'Select options', // text to be displayed when no item is selected defaults to Select,
    customComparator: () => {}, // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
    // limitTo: this.options.length ,// a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
    moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'No results found!' , // text to be displayed when no items are found while searching
    searchPlaceholder: 'Search' , // label thats displayed in search input,
    searchOnKey: 'name' // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
    };

  booleanVal = false;


  targetVal;
  private selectedLink;

conn;

  toTopicCase(str: string) {
    const result = str.toLowerCase().replace(/_/g, ' ');
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  ngOnInit() {
    this.view = 0;
    this.getConnections();
    this.getQueries();
    this.targets = 1;
    this.showFields = 0;

    // this.options = this.columns
      // = [
      // {id: 1 , description: this.columns},
      // {id: 2 , description: 'Adding new item1'},
      // {id: 3 , description: 'Adding new item2'},
      // {id: 4 , description: 'Adding new item3'},
      // {id: 5 , description: 'Adding new item4'},
      // {id: 6 , description: 'Adding new item5'},
      // {id: 7 , description: 'Adding new item6'},
      // {id: 8 , description: 'Adding new item7'},
    // ];

    this.datas = [
      {name: 'Tiger Nixon', Position: 'System Architect', Office: 'Edinburgh', Age: '61', Date: '2011/04/25', Salary: '$320,800' } ,
      {name: 'Garrett Winters',  Position: 'Accountant', Office: 'Tokyo', Age: '63', Date: '2011/07/25', Salary: '$170,750' },
      {name: 'Ashton Cox', Position: 'Junior Technical Author', Office: 'San Francisco', Age: '66', Date: '2009/01/12', Salary: '$86,000' },
      {name: 'Cedric Kelly', Position: 'Senior Javascript Developer', Office: 'Edinburgh', Age: '22', Date: '2012/03/29', Salary: '$433,060' },
      {name: 'Airi Satou', Position: 'Accountant', Office: 'Tokyo', Age: '33', Date: '2008/11/28', Salary: '$162,700' },
      {name: 'Brielle Williamson', Position: 'Integration Specialist', Office: 'New York', Age: '61', Date: '2012/12/02', Salary: '$372,000'  },
      {name: 'Herrod Chandler', Position: 'Sales Assistant', Office: 'San Francisco', Age: '59', Date: '2012/08/06', Salary: '$137,500' },
      {name: 'Rhona Davidson',  Position: 'Integration Specialist', Office: 'Tokyo', Age: '55', Date: '2010/10/14', Salary: '$327,900'},
      {name: 'Colleen Hurst', Position: 'Javascript Developer', Office: 'San Francisco', Age: '39', Date: '2009/09/15', Salary: '$205,500'  },
      {name: 'Sonya Frost',  Position: 'Software Engineer', Office: 'Edinburgh', Age: '23', Date: '2008/12/13', Salary: '$103,600' },
       {name: 'Jena Gaines',  Position: 'Office Manager', Office: 'London', Age: '30', Date: '2008/12/19', Salary: '$90,560' },

     ];
  }

  populate() {
    this.h = 1;
  }
  getConnections() {
    this.reportserv.getConnections().subscribe(response => {
      this.connections = response.data;
    });
  }
  getQueries() {
    this.reportserv.getQueries().subscribe(response => {
      this.queries = response.data;
    });
  }

  Change(event) {
    const subValue = event.target.value;
    this.isValues = true;
    this.disable = true;
    let del;
    if ( subValue === event.target.value ) {
    for ( let i = 0; i < this.tables.length; i++) {
      if ( this.tables[i] === event.target.value ) {
       this.rem = this.tables.splice(i, 1);
      }
     }
   }
   console.log(this.rem);
  }
  onChange(event) {
    console.log('MFGG >>>', event);
    this.booleanVal = !this.booleanVal;

  }

  setradio(e: string): void {
    this.selectedLink = e;
    if (e == 'manually') {
      this.isManual =  true;
    } else {
      this.isManual = false;
    }
  }

    isSelected(name: string): boolean {
        return (this.selectedLink === name); // if current radio button is selected, return true, else return false
    }



  enable() {
    this.disable = false;
    this.isShow = true;
  }

  configure() {
    this.que = {};
    this.view = 1;
  }

  Save() {
    this.h = 0;
  }

  Cancel() {

    this.view = 0;

  }
  Delete(queryId) {
    this.reportserv.deleteQuery(queryId).subscribe((response => {
      this.queries = this.queries.filter(query => query.id != queryId);
    }), (error) => {
      console.log(error, queryId);
    });
    }
    updateQuery(queryId) {
      debugger;
      this.reportserv.getQuery(queryId).subscribe((res) => {
        this.que = res.data;
        console.log(this.que);
      });
      this.view = 1;
    }



  processForm() {
      console.log(this.que);
      if (this.que.id == undefined) {
      this.reportserv.createQuery(this.que).subscribe((query) => {
        this.view = 0;
        console.log(query);
      }, (error) => {
        console.log(error);
      });
    } else {
        this.reportserv.updateQuery(this.que).subscribe((query) => {
          console.log(query);
          this.view = 0;
        }, (error) => {
          console.log(error);
        });
      }
  }
  table() {
    this.targets = 1;
  }
  column() {
    this.targets = 2;

  }
  filter() {
    this.targets = 3;

  }
  groupBy() {
    this.targets = 4;
  }
  orderBy() {
    this.targets = 5;

  }
  limit() {
    this.targets = 6;

  }

  showExtraFields() {
    this.showFields = 1;
  }


  getTables(connectionId) {
    this.reportserv.getTables(connectionId).subscribe(response => {
      this.tables = response.data;
    });
  }


  getUnionColumns(tables) {
    const tablesString = tables.join('---');
    this.reportserv.getColumns(this.que.connectionId, tablesString).subscribe(response => {
      this.columns = response.data;
    });
  }

  updateRawCodeBox() {
    this.que.content = this.oracleQueryBuilder.processQuery();
    this.document.getElementById('preview-box').innerText = this.que.content;
  }

  preview() {
    if (this.que.content.indexOf('rownum') < 0 && this.que.content.indexOf('rownum') < 0) {
      this.connections.forEach(connection => {
        if (connection.id == this.que.connectionId) {
          if (connection.dbms == 'oracle') {
            this.que.prevContent = `SELECT * FROM ( SELECT ROWNUM sn, z.* FROM
             ( ${this.que.content} ) z WHERE rownum <= 50) WHERE sn >= 0`;
          } else {
            this.que.prevContent = this.que.content + ' LIMIT 50';
          }
        }
      });
    }
    this.reportserv.preview(this.que.connectionId, this.que).subscribe(response => {
      this.document.getElementById('preview-box').innerHTML = response.data;
    });
  }

  addColumn() {
    const columnElem: HTMLFormElement = this.document.getElementById('columns') as HTMLFormElement;
    const alias = (this.document.getElementById('alias') as HTMLFormElement).value;
    const aggElem: HTMLFormElement = this.document.getElementById('aggregate') as HTMLFormElement;
    const column = columnElem.options[columnElem.selectedIndex].value;
    const aggregate = columnElem.options[aggElem.selectedIndex].value;
    this.oracleQueryBuilder.addSelect(column, alias, aggregate);
    this.updateRawCodeBox();
  }

  addTable(table = '', alias= '') {
    alias = alias || (this.document.getElementById('alias') as HTMLFormElement).value;
    if (!!table) {
      this.oracleQueryBuilder.addTable(table, alias, null, null);
      this.updateRawCodeBox();

      this.isDisabled = false;
      return;
    }
    const localKey: HTMLFormElement = this.document.getElementById('local-column') as HTMLFormElement;
    const tableElem: HTMLFormElement = this.document.getElementById('columns') as HTMLFormElement;
    const joinType: HTMLFormElement = this.document.getElementById('join-type') as HTMLFormElement;
    const operator: HTMLFormElement = this.document.getElementById('operator') as HTMLFormElement;
    const foreignKey: HTMLFormElement = this.document.getElementById('foreign-column') as HTMLFormElement;
    table = table || tableElem.options[tableElem.selectedIndex].value;
    const localColumn = localKey.options[localKey.selectedIndex].value;
    const foreignColumn = foreignKey.options[foreignKey.selectedIndex].value;
    const op  = operator.options[operator.selectedIndex].value;
    const jt  = joinType.options[joinType.selectedIndex].value;
    this.oracleQueryBuilder.addTable(table, alias, jt, {left: localKey, right: foreignKey, op: op});
    this.updateRawCodeBox();
    this.isDisabled = false;
  }

  getColumns() {
    const tableElem: HTMLFormElement = this.document.getElementById('table-1') as HTMLFormElement;
    const table = tableElem.options[tableElem.selectedIndex].value;
    const alias = (this.document.getElementById('table-1-alias') as HTMLFormElement).value;
    this.oracleQueryBuilder.addTable(table, alias, null, null);
    this.updateRawCodeBox();
    this.reportserv.getColumns(this.que.connectionId, table).subscribe(response => {
      this.columns = response.data;
    });
  }
  addFilter() {
    const columnElem: HTMLFormElement = this.document.getElementById('columns') as HTMLFormElement;
    const column = columnElem.options[columnElem.selectedIndex].value;
    const conditionElem: HTMLFormElement = this.document.getElementById('conditions') as HTMLFormElement;
    const condition = conditionElem.options[conditionElem.selectedIndex].value;
    const valueElem: HTMLFormElement = this.document.getElementById('values') as HTMLFormElement;
    const value = valueElem.options[valueElem.selectedIndex].value;
    this.oracleQueryBuilder.addWhere(column, condition, value, null);
    this.updateRawCodeBox();
    console.log('it is working');
  }
  addGroup() {
    const groupElem: HTMLFormElement = this.document.getElementById('groups') as HTMLFormElement;
    const group = groupElem.options[groupElem.selectedIndex].value;

    this.oracleQueryBuilder.addGroup(group);
    this.updateRawCodeBox();
    console.log('it is working');
  }

  setEvent(event) {
    this.isDisabled = false;
  }
}
