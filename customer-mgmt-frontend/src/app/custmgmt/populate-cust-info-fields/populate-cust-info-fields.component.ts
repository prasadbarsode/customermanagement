import { Component, Input, OnInit, ChangeDetectionStrategy  } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { CustInfoBase }     from '../cust-info-base';

import {NgbDatepicker, NgbDateAdapter,
  NgbDateStruct, NgbDateParserFormatter, NgbDatepickerConfig,
  NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

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

  constructor(
    private calendar: NgbCalendar,
    private config: NgbDatepickerConfig
    ) {
    //console.log("inside populate field:", this.customerType);
    
      
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
  if(this.form.controls['customerType'].value==2) {
        this.config.maxDate = {year:this.currentDate.getFullYear() + 3, 
        month: this.currentDate.getMonth() + 1,
        day: this.currentDate.getDate()};
    }else if(this.form.controls['customerType'].value==1){
        this.config.maxDate = {year:this.currentDate.getFullYear() + 2, 
        month: this.currentDate.getMonth() + 1,
        day: this.currentDate.getDate()};
    } 
    
    //console.log("Inside populate:", this.form.controls['contractExpiryDate'].value)
  }

  ngAfterViewInit() {
    
  }

}
