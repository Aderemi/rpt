import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ExchangeRate} from './exchange-rate';
import { ExchangeRateService } from './exchange-ratetype.service';
import { Router } from '@angular/router';
// import { ConfirmationDialogService } from '../components/confirmation-dialog/confirmation-dialog.service';

import * as $ from 'jquery';
// import 'datatables.net';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.css']
})
export class ExchangeRatesComponent implements OnInit {
  ExchRates: ExchangeRate[];
  exchangeRate = new ExchangeRate();
  dataTable: any;
  selectedExchRate: any;

  constructor(private router: Router, private exchrateService: ExchangeRateService,
    // private confirmationDialogService: ConfirmationDialogService,
     private chRef: ChangeDetectorRef) { }


 

  deleteExchRate() {
    if (this.selectedExchRate.id) {
      this.exchrateService.deleteExchangeRate(this.selectedExchRate.id).subscribe(data => {
        console.log('Exchange Rate Deleted');
        this.ngOnInit();

      });
    }



  }

  editExchRate() {
    const isValid = !isNaN(this.selectedExchRate.id);
    if (isValid) {
      console.log('Exchange Rate edited');
      this.router.navigate(['/exchangerate', this.selectedExchRate.id]);
    }


  }

  set(event: any, exchrate: any) {
    console.log('Exchange rate selected' + exchrate);
    this.selectedExchRate = exchrate;
         
  }

  search() {
    console.log('searching exchange rate !!');
    this.exchrateService.queryExchangeRate(this.exchangeRate).subscribe((data => {
      this.ExchRates = data;
      console.log(data);
      this.chRef.detectChanges();

      const table = $('table');
      // this.dataTable = table.DataTable();

    }), (err => {
      console.log('Exhange rate search error ' + err);
    }));
  }

  // public openConfirmationDialog() {

  //   this.confirmationDialogService.confirm('Confirm delete', `Do you wish to delete ${this.selectedExchRate.name}?`)
  //     .then((confirmed) => {
  //       console.log('User confirmed:', confirmed); this.deleteExchRate();
  //     })
  //     .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  // }

  ngOnInit() {
    this.exchrateService.getExchRates().subscribe(data => {
      console.log(data);
      this.ExchRates = data;
      this.chRef.detectChanges();

      const table: any = $('#myTable');
      this.dataTable = table.DataTable();         
    }, (error) => {
      console.log(error);
    });

 
  }


}
