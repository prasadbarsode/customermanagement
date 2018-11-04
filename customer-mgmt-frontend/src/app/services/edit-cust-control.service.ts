import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { CustInfoBase } from '../custmgmt/cust-info-base';

@Injectable()
export class EditCustControlService {

  private _url:string = 'http://localhost:3000/getcustomerdetails/customerdetails/';

  constructor(private http: Http) { }

  getSelectedCustomerInfo(id){
    return this.http.get(this._url + id)
      .map(res => {
        //console.log(res);
        return res.json()
      });
  }

  toFormGroup(selectedCustDetails: CustInfoBase<any>[], customerDataRes) {

    let group: any = {};
    selectedCustDetails.forEach(custInfo => {
      
      switch(custInfo.key){
        case 'name':
        group[custInfo.key] = custInfo.required ? new FormControl(customerDataRes.name || '', [Validators.required, Validators.minLength(2)])
        : new FormControl(customerDataRes.name || '');
        break;

        case 'country':
        group[custInfo.key] = custInfo.required ? new FormControl(customerDataRes.country || '', [Validators.required])
        : new FormControl(customerDataRes.country || '');
        break;

        case 'websiteUrl':
        group[custInfo.key] = custInfo.required ? new FormControl(customerDataRes.websiteUrl || '', Validators.required)
        : new FormControl(customerDataRes.websiteUrl || '');
        break;

        case 'numberOfEmployees':
        // group[custInfo.key] = custInfo.required ? new FormControl(custInfo.value || '', [Validators.required, Validators.pattern(/^[1-9][0-9]{0,9}$/)])
        // : new FormControl(custInfo.value || '');
        group[custInfo.key] = custInfo.required ? new FormControl(customerDataRes.numberOfEmployees || '', [Validators.required, Validators.pattern(/^[1-9][0-9]{0,9}$/)])
        : new FormControl(customerDataRes.numberOfEmployees || '');
        break;

        case 'contractExpiryDate':
        group[custInfo.key] = custInfo.required ? new FormControl(customerDataRes.contractExpiryDate, [Validators.required])
        : new FormControl(customerDataRes.contractExpiryDate || '');
        break;

        case 'annualTurnover':
          group[custInfo.key] = custInfo.required ? new FormControl(customerDataRes.annualTurnover || '', [Validators.required, Validators.pattern(/^[1-9][0-9]{0,9}$/)])
        : new FormControl(customerDataRes.annualTurnover || '');
        break;

        case 'complianceChecked':
        //console.log("Compliance checked:" + custInfo.key + customerDataRes.complianceChecked);
        group[custInfo.key] = custInfo.required ? new FormControl(customerDataRes.complianceChecked, [Validators.required])
        : new FormControl(customerDataRes.complianceChecked || '');
        break;

        default:
        group[custInfo.key] = custInfo.required ? new FormControl(custInfo.value || '', Validators.required)
        : new FormControl(custInfo.value || '');
      }

    });

    return new FormGroup(group);

  }

}
