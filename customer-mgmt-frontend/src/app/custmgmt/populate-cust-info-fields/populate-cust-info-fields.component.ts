import { Component, Input, OnInit, ChangeDetectionStrategy  } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { CustInfoBase }     from '../cust-info-base';
import { CustomerType } from '../../model/customer-type';

import {NgbDatepickerConfig, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-populate-cust-info-fields',
  templateUrl: './populate-cust-info-fields.component.html',
  styleUrls: ['./populate-cust-info-fields.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopulateCustInfoFieldsComponent implements OnInit{
  @Input() custInfo: CustInfoBase<any>;
  @Input() form: FormGroup;
  @Input() customerType;
  currentDate: any;

  custType = new CustomerType();

  constructor(
    private calendar: NgbCalendar,
    private config: NgbDatepickerConfig
    ) {
    
  }

  get isValid() { return this.form.controls[this.custInfo.key].valid; }

  ngOnInit() {
    this.getValidContractDates();
  }
  
  getValidContractDates(){
    //It is not allowed to set back date for contract expiry date
    //Current date is set as minimun date
    this.currentDate = new Date();
      this.config.minDate = {year:this.currentDate.getFullYear(), 
        month: this.currentDate.getMonth() + 1,
        day: this.currentDate.getDate()};

  //Calculate max date allowed for contract expiry
  //Max exp date is plus 2 years from current date in case of small customer(typ=1)
  //Max exp date is plus 3 years from current date in case of big customer (type=2)  
  if(this.form.controls['customerType'].value==this.custType.bigCustomerType) {
        this.config.maxDate = {year:this.currentDate.getFullYear() + 3, 
        month: this.currentDate.getMonth() + 1,
        day: this.currentDate.getDate()};
    }else if(this.form.controls['customerType'].value==this.custType.smallCustomerType){
        this.config.maxDate = {year:this.currentDate.getFullYear() + 2, 
        month: this.currentDate.getMonth() + 1,
        day: this.currentDate.getDate()};
    } 
  
  }

}
