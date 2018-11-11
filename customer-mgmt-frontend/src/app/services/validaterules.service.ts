import { Injectable } from '@angular/core';

@Injectable()
export class ValidaterulesService {

    YYYYMMDD_START = 0
    YYYYMMDD_END = 10;
    TIMEINDATE_START = 11;
    TIMEINDATE_END = 19;
    DATELESSTHANTEN = 10;
    ISOString_START = 0;
    ISOString_END = 19;
    ISOString_TIMEZONEOFFSET = 25;
    DIVIDEBYSIXTY = 60;

  constructor() { }

  convertUTCtoDateformat(contractExpiryDate){
    //Convert UTC date format to standard date
    let contractExpDateDisplayFormat = contractExpiryDate.substring(this.YYYYMMDD_START,this.YYYYMMDD_END).concat(" ").concat(contractExpiryDate.substring(this.TIMEINDATE_START,this.TIMEINDATE_END));
    contractExpDateDisplayFormat = new Date(contractExpDateDisplayFormat);
    return contractExpDateDisplayFormat;
  }

  //This function is called to convert date back to UTC format for DB storage
  getContractExpiryDateinUTCFormat(contractExpiryDate){
    let contractExpYear = contractExpiryDate.year;
    let contractExpMonth = contractExpiryDate.month;
    let contractExpDate = contractExpiryDate.day;
    
    Date.prototype.toISOString = function() {
      let tzo = -this.getTimezoneOffset();
      let dif = tzo >= 0 ? '+' : '-';
    
    //append 0 if date is less than 10
      let pad = function(num) {
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
  
    let dt = new Date();
    
    let revisedContractEndDate = dt.toISOString().substring(this.ISOString_START,this.ISOString_END).concat(" ").concat(dt.toISOString().substring(this.ISOString_END,this.ISOString_TIMEZONEOFFSET));
    
    return revisedContractEndDate;
  }

}
