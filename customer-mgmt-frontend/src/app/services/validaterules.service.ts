import { Injectable } from '@angular/core';

@Injectable()
export class ValidaterulesService {

  constructor() { }

  convertUTCtoDateformat(contractExpiryDate){
    
    //Convert UTC date format to standard date
    let contractExpDateDisplayFormat = contractExpiryDate.split(" ");
      
    if(contractExpDateDisplayFormat.length > 1){
      contractExpiryDate = contractExpDateDisplayFormat[0] + contractExpDateDisplayFormat[1];
    }
    contractExpDateDisplayFormat = contractExpiryDate.substring(0,10).concat(" ").concat(contractExpiryDate.substring(11,19));
    contractExpDateDisplayFormat = new Date(contractExpDateDisplayFormat);
    
    return contractExpDateDisplayFormat;
  }

  //This function is called to convert date back to UTC format for DB storage
  getContractExpiryDateinUTCFomrt(contractExpiryDate,europeTimeZoneOffset){
    let contractExpYear = contractExpiryDate.year;
    let contractExpMonth = contractExpiryDate.month;
    let contractExpDate = contractExpiryDate.day;

    Date.prototype.toISOString = function() {
      var tzo = -this.getTimezoneOffset(),
          dif = tzo >= 0 ? '+' : '-',
          pad = function(num) {
              var norm = Math.floor(Math.abs(num));
              return (norm < 10 ? '0' : '') + norm;
          };
      return contractExpYear +
          '-' + pad(contractExpMonth) +
          '-' + pad(contractExpDate) +
          'T' + pad(this.getHours()) +
          ':' + pad(this.getMinutes()) +
          ':' + pad(this.getSeconds()) +
          dif + pad(tzo / 60) +
          ':' + pad(tzo % 60);
  };
  
    var dt = new Date();
    //console.log("dt:", dt.toISOString());
    let revisedContractEndDate = dt.toISOString().substring(0,19).concat(" ").concat(europeTimeZoneOffset);
    //console.log("revisedContractEndDate:", revisedContractEndDate);
    return revisedContractEndDate;
  }

}
