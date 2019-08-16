import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ExchangeRatetype} from './exchange-ratetype';
import { ExchangeRateService } from './exchange-ratetype.service';
import { Router } from '@angular/router';
// import { ConfirmationDialogService } from '../components/confirmation-dialog/confirmation-dialog.service';

import * as $ from 'jquery';
// import 'datatables.net';

@Component({
  selector: 'app-exchange-rate-types',
  templateUrl: './exchange-rate-types.component.html',
  styleUrls: ['./exchange-rate-types.component.css']
})
export class ExchangeRateTypesComponent implements OnInit {

  ExchRatetypes: ExchangeRatetype[];
  exchangeRateType = new ExchangeRatetype();
  dataTable: any;
  selectedExchRatetype: any;

  constructor(private router: Router, private exchratetypeService: ExchangeRateService,
    // private confirmationDialogService: ConfirmationDialogService, 
    private chRef: ChangeDetectorRef) { }


 

  deleteExchRatetype() {
    if (this.selectedExchRatetype.id) {
      this.exchratetypeService.deleteExchangeRatetype(this.selectedExchRatetype.id).subscribe(data => {
        console.log('Exchange Rate Type Deleted');
        this.ngOnInit();

      });
    }



  }

  editExchRatetype() {
    const isValid = !isNaN(this.selectedExchRatetype.id);
    if (isValid) {
      console.log('Exchange Rate Type edited');
      this.router.navigate(['/exchangeratetype', this.selectedExchRatetype.id]);
    }


  }

  set(event: any, exchratetype: any) {
    console.log('Exchange rate type selected' + exchratetype);
    this.selectedExchRatetype = exchratetype;
         
  }

  search() {
    console.log('searching exchange rate !!');
    this.exchratetypeService.query(this.exchangeRateType).subscribe((data => {
      this.ExchRatetypes = data;
      console.log(data);
      this.chRef.detectChanges();

      const table = $('table');
      // this.dataTable = table.DataTable();

    }), (err => {
      console.log('Exhange rate search error ' + err);
    }));
  }

  // public openConfirmationDialog() {

  //   this.confirmationDialogService.confirm('Confirm delete', `Do you wish to delete ${this.selectedExchRatetype.name}?`)
  //     .then((confirmed) => {
  //       console.log('User confirmed:', confirmed); this.deleteExchRatetype();
  //     })
  //     .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  // }

  ngOnInit() {
    this.exchratetypeService.getExchRatetypes().subscribe(data => {
      console.log(data);
      this.ExchRatetypes = data;
      this.chRef.detectChanges();

      const table: any = $('#myTable');
      this.dataTable = table.DataTable();         
    }, (error) => {
      console.log(error);
    });

 
  }

}
