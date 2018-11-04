import { CustInfoBase } from './cust-info-base';

export class DropdownInfo extends CustInfoBase<string> {
  controlType = 'dropdown';
  options: {key: string, value: string}[] = [];
  custCountrySetValue: string;

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
    //this.custCountrySetValue = options['type'] || [];
  }
}
