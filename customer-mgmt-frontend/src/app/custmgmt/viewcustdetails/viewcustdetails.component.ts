import { Component, OnInit } from '@angular/core';

import { CustdetailsService } from '../../services/custdetails.service';
import { ValidaterulesService } from '../../services/validaterules.service';

@Component({
  selector: 'app-viewcustdetails',
  templateUrl: './viewcustdetails.component.html',
  styleUrls: ['./viewcustdetails.component.css']
})
export class ViewcustdetailsComponent implements OnInit {

  customerDataRes = [];

  smallCustomers = [];
  bigCustomers = [];

  constructor(
    private custdetailsService: CustdetailsService,
    private validaterulesService: ValidaterulesService
  ) { }

  ngOnInit() {
    this.getCustomerDetails();
  }

  getCustomerDetails(){
    this.custdetailsService.getCustomerData()
      .subscribe(data => {
        
        this.customerDataRes = data;
        
        for(let i=0; i<this.customerDataRes.length; i++){
          this.customerDataRes[i].contractExpiryDate = this.validaterulesService.convertUTCtoDateformat(this.customerDataRes[i].contractExpiryDate);
          //console.log("View Screen:", this.customerDataRes[i].contractExpiryDate); 
        }
        
        this.smallCustomers = this.customerDataRes.filter((customerDataRes) => {
            return customerDataRes.type == 1;
        });

        this.bigCustomers = this.customerDataRes.filter((customerDataRes) => {
          return customerDataRes.type == 2;
        });
        //console.log(this.bigCustomers);
      }); 
  
  }


}
