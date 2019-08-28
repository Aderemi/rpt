import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import { ReportService } from 'src/app/service/report.service';
import { Router, ActivatedRoute } from '@angular/router';
import {ReportConnection, ReportQueries} from '../../class/report';
import { Oracle10gQBuilder } from '../../../lib/query-builder/Oracle10gQBuilder';
import {DOCUMENT} from '@angular/common';
import {BaseQBuilder} from '../../../lib/query-builder/BaseQBuilder';
import {error} from 'util';

@Component({
  selector: 'app-query-builder',
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.css']
})
export class QueryBuilderComponent implements OnInit {

  constructor( private reportserv: ReportService, private router: Router, private route: ActivatedRoute, @Inject(DOCUMENT) private document: Document ) { }
  drone = 'manually';
  oracleQueryBuilder: Oracle10gQBuilder = new Oracle10gQBuilder();
  aggregateValues = [
    {name : 'Sum of', value: ' SUM(_)'},
    {name : 'Average of', value: ' AVG(_)'},
    {name : 'Minimum in', value: ' MIN(_)'},
    {name : 'Maximum in', value: ' MAX(_)'},
    {name : 'Count of', value: ' COUNT(_)'}
];

joinsValues = [
  {name: 'Cross join', value: 'Cross join'},
  {name: 'Inner join', value: 'Inner join'},
  {name: 'Left outer join', value: 'Left outer join'},
  {name: 'right outer join', value: 'right outer join'},
];

  tableObj = [];
  isManual = true;
  view;
  views;
  values = [
    { id: 3432, name: 'Zenith conn' },
    { id: 3442, name: 'Kachasi Default' },
    { id: 3352, name: 'Logging Database' },
  ];
  tableContainer: string[] = ['Please Select a Connection'];
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
  secondaryColumns: string[] = ['Please Select a Table'];
  _columns = {};
  leftTable: string;
  rightTable: string;
  queryData;
  que: ReportQueries;
  targets;
  currTable;
  showFields;
  options = [];
  isDisabled = true;
  @ViewChild('queryPreviewHtml',  { read: ElementRef }) queryPreviewHtml: ElementRef;
  @ViewChild('preview-box',  { read: ElementRef }) previewBox: ElementRef;
  config = {
    displayKey: 'value', // if objects array passed which key to be displayed defaults to description
    search: true, // true/false for the search functionlity defaults to false,
    height: '250px' , // height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
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
  userColumn;
  dataModel;

//  tableContainer: string[] = ['Please select connection first'];

  nextColumns;
  userFilter;

  toTopicCase(str: string) {
    const result = str.substring(str.indexOf('.') + 1).toLowerCase().replace(/_/g, ' ');
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  ngOnInit() {
    this.view = 0;
    this.getConnections();
    this.getQueries();
    this.targets = 1;
    this.showFields = 0;
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
    for (let i = 0; i < this.tableContainer.length; i++) {
      if ( this.tableContainer[i] === event.target.value ) {
       this.rem = this.tableContainer.splice(i, 1);
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
    this.oracleQueryBuilder.reset();
    this.rightTable = null;
    this.leftTable = null;
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
      this.tableContainer = response.data;
    });
  }

  getUnionColumns(tables) {
    const tablesString = tables.join('---');
    this.reportserv.getColumns(this.que.connectionId, tablesString).subscribe(response => {
      this.columns = response.data;
    });
  }

  updateRawCodeBox() {
    const iTables = this.oracleQueryBuilder.getUserData('tables');
    const iTableCount = iTables.length;
    this.que.content = this.oracleQueryBuilder.processQuery();
    this.document.getElementById('preview-box').innerText = this.que.content;
  }

  preview() {
    if (this.que.content.indexOf('rownum') < 0 && this.que.content.indexOf('rownum') < 0) {
      this.connections.forEach(connection => {
        if (connection.id == this.que.connectionId) {
          if (connection.dbms === 'oracle') {
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
    const aggregate = aggElem.options[aggElem.selectedIndex].value;
    this.oracleQueryBuilder.addSelect(column, alias, aggregate);
    this.userColumn = this.oracleQueryBuilder.getUserData('select');
    this.updateRawCodeBox();
  }

  addTable() {
    const tableId = this.rightTable ? 'table-2' : 'table-1';
    const aliasId = this.rightTable ? 'table-2-alias' : 'table-1-alias';
    const joinTypeElement: HTMLFormElement = this.document.getElementById('joinType') as HTMLFormElement;
    const tableElement: HTMLFormElement = this.document.getElementById(tableId) as HTMLFormElement;
    const leftColumnElement: HTMLFormElement = this.document.getElementById('join') as HTMLFormElement;
    const joinConditionElement: HTMLFormElement = this.document.getElementById('joinCondition') as HTMLFormElement;
    const rightColumnElement: HTMLFormElement = this.document.getElementById('foreignKey') as HTMLFormElement;
    const alias = (this.document.getElementById(aliasId) as HTMLFormElement).value;
    const joinType  = joinTypeElement ? joinTypeElement.options[joinTypeElement.selectedIndex].value : null;
    const table = tableElement.options[tableElement.selectedIndex].value;
    const leftColumn  = leftColumnElement ? leftColumnElement.options[leftColumnElement.selectedIndex].value : null;
    const joinCondition = joinConditionElement ? joinConditionElement.options[joinConditionElement.selectedIndex].value : null;
    const rightColumn = rightColumnElement ? rightColumnElement.options[rightColumnElement.selectedIndex].value : null;
    if (!table) { throw new error('Table is required'); }
    this.alternateTable(alias || table);

    this.getColumns(table, alias);
    const on = joinCondition ? [{left: leftColumn, right: rightColumn, op: joinCondition}] : null;
    this.oracleQueryBuilder.addTable(table, alias, joinType, on);
    this.tableObj = this.oracleQueryBuilder.getUserData('tables');
    this.updateRawCodeBox();
  }

  getColumns(table, alias = '') {
    if (this._columns[table]) {
      if (alias) {
        this._columns[alias] = this._columns[table];
        delete this._columns[table];
      }
      return;
    }
    this.reportserv.getColumns(this.que.connectionId, table).subscribe(response => {
      this._columns[alias || table] = [];
      debugger;
      this.alternateTable(alias || table);

      for (const column of response.data) {
        this.options.push({id: column, value: column});
        this._columns[alias || table].push(`${alias || table}.${column}`);
      }
    });
  }

  alternateTable(table) {
      if (table === this.rightTable) {} else if (!this.rightTable && !this.leftTable) { this.rightTable = table; } else if (this.rightTable && !this.leftTable) { this.leftTable = table; } else if (this.rightTable && this.leftTable) {
          this.rightTable = this.leftTable;
          this.leftTable = table;
      }
  }

  addFilter() {
    const columnElem: HTMLFormElement = this.document.getElementById('columns') as HTMLFormElement;
    const column = columnElem.options[columnElem.selectedIndex].value;
    const conditionElem: HTMLFormElement = this.document.getElementById('conditions') as HTMLFormElement;
    const operator = conditionElem.options[conditionElem.selectedIndex].value;
    const value: HTMLFormElement = (this.document.getElementById('values') as HTMLFormElement).value;
    console.log(value);
    this.oracleQueryBuilder.addWhere(column, operator, value, null);
    this.userFilter = this.oracleQueryBuilder.getUserData('where');
    this.updateRawCodeBox();
  }

  addGroup() {
    const group = this.dataModel.map(dataModel => dataModel.id);
    this.oracleQueryBuilder.addGroup(group);
    this.updateRawCodeBox();
  }

  addOrder() {
    const columnElem: HTMLFormElement = this.document.getElementById('columns') as HTMLFormElement;
    const column = columnElem.options[columnElem.selectedIndex].value;
    let direction;
    direction = (this.document.getElementById('ascending') as HTMLFormElement).checked ? (this.document.getElementById('ascending') as HTMLFormElement).value : undefined;
    direction = (this.document.getElementById('descending') as HTMLFormElement).checked ? (this.document.getElementById('descending') as HTMLFormElement).value : undefined;
    this.oracleQueryBuilder.addOrder(column, direction);
    this.updateRawCodeBox();
  }

  removeFilter(column, operator) {
    this.oracleQueryBuilder.removeFilter(column, operator);
    this.userColumn = this.oracleQueryBuilder.getUserData('where');
    this.updateRawCodeBox();
}

  removeSelectColumn(column, aggregate) {
    this.oracleQueryBuilder.removeSelectColumn(column, aggregate);
    this.userColumn = this.oracleQueryBuilder.getUserData('select');
    this.updateRawCodeBox();
  }

  removeTable(table) {
    this.oracleQueryBuilder.removeTable(table);
    this.userColumn = this.oracleQueryBuilder.getUserData('select');
    this.updateRawCodeBox();
  }
  addLimit() {

    const limit: HTMLFormElement = (this.document.getElementById('limits') as HTMLFormElement).value;
    this.oracleQueryBuilder.addLimit(limit);
    this.updateRawCodeBox();
    console.log('it is working');

  }
  setEvent(event) {
    this.isDisabled = false;
  }

  _getAllColumns() {
    const cols = [];
    for (const t in this._columns) {
      cols.push(...this._columns[t]);
    }
    return cols;
  }
}
