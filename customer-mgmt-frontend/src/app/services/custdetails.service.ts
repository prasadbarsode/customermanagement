import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { SmallcustDetails } from '../model/custprofile';

//import environment parameters
import { environment } from '../../environments/environment';

//classes for dynamic field generation
import { CustInfoBase } from '../custmgmt/cust-info-base';
import { TextboxInfo } from '../custmgmt/textbox-info';
import { DropdownInfo } from '../custmgmt/dropdown-info';
import { DatepickerInfo } from '../custmgmt/datepicker-info';


@Injectable()
export class CustdetailsService {

  private _url = environment.envurl;
  
  constructor(
    private http: Http,
  ) { }

  getCustomerData(): Observable<SmallcustDetails[]>{
    return this.http.get(this._url+'getcustomerdetails/customerdetails/')
      .map(res => {
        return res.json();
      });
  }

  getSelectedCustomerInfo(id){
    return this.http.get(this._url+'getcustomerdetails/customerdetails/' + id)
      .map(res => {
        return res.json()
      });
  }

  // TODO: get from a remote source of customer field metadata
  // TODO: make asynchronous
  getCustInfoBase() {
  let editCustDetailsFields: CustInfoBase<any>[] = [  
    new TextboxInfo({
      key: 'name',
      label: 'Name',
      value: '',
      required: true,
      order: 1
    }),
    new DropdownInfo({
      key: 'country',
      label: 'Country',
      options: [
        {key: 'Denmark',  value: 'Denmark'},
        {key: 'Sweden',  value: 'Sweden'},
        {key: 'Norway',   value: 'Norway'},
      ],
      custCountrySetValue: '',
      required: true,
      order: 2
    }),
    new TextboxInfo({
      key: 'websiteUrl',
      label: 'Website Url',
      value: '',
      order: 3
    }),
    new TextboxInfo({
      key: 'numberOfEmployees',
      label: 'Number Of Employees',
      value: '',
      required: true,
      order: 4
    }),
    new DatepickerInfo({
      key: 'contractExpiryDate',
      label: 'Contract Expiry Date',
      value: '',
      required: true,
      order: 6
    }),
    new TextboxInfo({
      key: 'annualTurnover',
      label: 'Annual Turnover',
      value: '',
      required: true,
      order: 6
    }),
    new DropdownInfo({
      key: 'complianceChecked',
      label: 'Compliance Checked',
      options: [
        {key: 'true', value: 'Yes'},
        {key: 'false', value: 'No'},
      ],
      //custCountrySetValue: '',
      required: true,
      order: 7
    }),
  ];

    return editCustDetailsFields.sort((a, b) => a.order - b.order);
  }

  //Function to update customr data
  updateCustomerDetail(editedCustomerData){
    let headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.put(this._url+'getcustomerdetails/customerdetails/'+editedCustomerData._id, JSON.stringify(editedCustomerData),{headers: headers})
        .map(res => res.json());
  }

}
