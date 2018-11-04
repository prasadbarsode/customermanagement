import { Component, OnInit } from '@angular/core';
import { CustdetailsService } from '../../services/custdetails.service';

@Component({
  selector: 'app-dynamiccustedit',
  templateUrl: './dynamiccustedit.component.html',
  styleUrls: ['./dynamiccustedit.component.css'],
  providers:  [CustdetailsService]
})
export class DynamiccusteditComponent implements OnInit {
  custInfoToBeEdited: any[];
  customerDataRes : any = {};
  contractExpDateDisplayFormat: any;
  selectedDate: any;

  constructor(
    private custdetailsService: CustdetailsService,
  ) {
     
    this.custInfoToBeEdited = this.custdetailsService.getCustInfoBase();
    //console.log("custInfoToBeEdited:", this.custInfoToBeEdited);
  }

  ngOnInit() {

  }

}
