import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { SmallcustDetails } from '../model/custprofile';

@Injectable()
export class CustDetailsServiceMock {
  constructor() { }

  getCustomerData(): Observable<SmallcustDetails[]> {  
    let custdetails: SmallcustDetails[] = [
      {"_id":"5bd9156f36b7d3a932eb5b14",
      "id": "5b7fb4583cb160a0409a1a1b",
      "type":1,
      "name":"Lula",
      "country":"Sweden",
      "websiteUrl":"http://Stanley.com",
      "numberOfEmployees": 10,
      "contractExpiryDate":"2018-11-16T12:06:41 -01:00"}
    ];  
     return Observable.of(custdetails);
  }
}

// {"_id":"5bd9156f36b7d3a932eb5b15",
//       "id":"5b7fb458c59b6073e7d04b42",
//       "type":2,
//       "name":"Kathleen",
//       "country":"Sweden",
//       "websiteUrl":"http://Brandie.com",
//       "numberOfEmployees":20,
//       "contractExpiryDate":"2018-11-30T11:59:30 -01:00",
//       "annualTurnover":400000,
//       "complianceChecked":false},
//       {"_id":"5bd9156f36b7d3a932eb5b16",
//       "id":"5b7fb458054682d9d4664934",
//       "type":1,
//       "name":"Willie",
//       "country":"Denmark",
//       "websiteUrl":"http://Chandler.com",
//       "numberOfEmployees":13,
//       "contractExpiryDate":"2018-11-23T11:40:53 -01:00"},
//       ,{"_id":"5bd9156f36b7d3a932eb5b19",
//       "id":"5b7fb45801e1bf74806f743e",
//       "type":2,
//       "name":"Emerson",
//       "country":"Norway",
//       "websiteUrl":"http://Sally.com",
//       "numberOfEmployees":9,
//       "contractExpiryDate":"2018-08-26T11:47:35 -02:00",
//       "annualTurnover":166648,
//       "complianceChecked":false}