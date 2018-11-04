import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustdetailsService } from '../../services/custdetails.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import {NgbDatepicker, NgbDateAdapter,
  NgbDateStruct, NgbDateParserFormatter, NgbDatepickerConfig,
  NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-editcustomerdetails',
  templateUrl: './editcustomerdetails.component.html',
  styleUrls: ['./editcustomerdetails.component.css']
})
export class EditcustomerdetailsComponent implements OnInit {
  editCustInfoform: FormGroup;

  customerDataRes : any = {};
  contractExpDateDisplayFormat: any;
  model2: Date;

  minDate: NgbDateStruct;
  maxDate: NgbDateStruct;
  currentDate: any;
  //selectedDate: NgbDateStruct;
  selectedDate: any;

  countries = ['Denmark', 'Sweden', 'Norway'];

  constructor(private custdetailsService: CustdetailsService,
    private route: ActivatedRoute,
    private router: Router,
    private calendar: NgbCalendar,
    private config: NgbDatepickerConfig) {
      this.getSelectedCustomerDetail(this.route.snapshot.params.id);
      this.currentDate = new Date();
      config.minDate = {year:this.currentDate.getFullYear(), 
        month: this.currentDate.getMonth() + 1,
        day: this.currentDate.getDate()};
       
      config.maxDate = {year:this.currentDate.getFullYear() + 3, 
          month: this.currentDate.getMonth() + 1,
          day: this.currentDate.getDate()};
    }

  ngOnInit() {
    this.createForm();
  }

  createForm(){

  }

  //Make service call to fetch details of selected customer
  getSelectedCustomerDetail(id){
    this.custdetailsService.getSelectedCustomerInfo(id).subscribe(data => {
      
      this.customerDataRes = data;
      
      //get UTC date in correct format as it has extra space in test data
      this.customerDataRes.contractExpiryDate = this.convertUTCtoDateformat(this.customerDataRes.contractExpiryDate);
      this.selectedDate = this.customerDataRes.contractExpiryDate;
      console.log("Assigned date:", this.selectedDate);
    })
  }

  convertUTCtoDateformat(contractExpiryDate){
    //Convert UTC date format to standard date
    this.contractExpDateDisplayFormat = contractExpiryDate.split(" ");
      
    if(this.contractExpDateDisplayFormat.length > 1){
      contractExpiryDate = this.contractExpDateDisplayFormat[0] + this.contractExpDateDisplayFormat[1]
      //console.log("contractExpDateDisplayFormat:", contractExpiryDate);
    }
    
    this.contractExpDateDisplayFormat = new Date(contractExpiryDate);
    return this.contractExpDateDisplayFormat;
  }

  onEditCustomerSubmit(id){
    console.log("inside edit customer");
    //var event = new Date('05 October 2011 14:48 UTC');
    //console.log(event.toISOString());

    let revisedDate = new Date(this.selectedDate.year, this.selectedDate.month, this.selectedDate.day);
    console.log(revisedDate.toISOString());
    let localTime = revisedDate.getTime();

    // obtain local UTC offset and convert to msec
    let localOffset = revisedDate.getTimezoneOffset() * 60000;
    let offset = 5.5;   
    
    // obtain UTC time in msec
    let utc = localTime + localOffset;  

    let bombay = utc + (3600000*offset);

    let nd = new Date(bombay); 
    //document.writeln("Bombay time is " + nd.toLocaleString() + "<br>");
    console.log(nd.toLocaleString());

    const revisedCustomerDetail = {
      _id: this.customerDataRes._id,
      id: this.customerDataRes.id,
      type: this.customerDataRes.type,
      name: this.customerDataRes.name,
      country: this.customerDataRes.country,
      websiteUrl: this.customerDataRes.websiteUrl,
      numberOfEmployees: this.customerDataRes.numberOfEmployees,
      contractExpiryDate: revisedDate.toISOString(),
      annualTurnover: this.customerDataRes.annualTurnover,
      complianceChecked: this.customerDataRes.complianceChecked
    }
    
    console.log('revisedCustomerDetail:' + revisedCustomerDetail.contractExpiryDate);

    // Required Fields
    //  if(!this.validateService.validateAirlineDetails(this.revisedCustomerDetail)){
    //   console.log("Please feel in all fields to complete addition of new airline");
    //   return false;
    // }

    //Navigate back to default view in case of success
    //this.router.navigate(['/']);
  }
}
