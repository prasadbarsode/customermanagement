import { Component, OnInit } from '@angular/core';
import { CustdetailsService } from '../../services/custdetails.service';

@Component({
  selector: 'app-editcustomerdetails',
  templateUrl: './editcustomerdetails.component.html',
  styleUrls: ['./editcustomerdetails.component.css'],
  providers:  [CustdetailsService],
})
export class EditcustomerdetailsComponent implements OnInit {
  custInfoToBeEdited: any[];
  customerDataRes : any = {};
  contractExpDateDisplayFormat: any;
  selectedDate: any;

  constructor(private custdetailsService: CustdetailsService){
    this.custInfoToBeEdited = this.custdetailsService.getCustInfoBase();
  }

  ngOnInit() {
    
  }

}
