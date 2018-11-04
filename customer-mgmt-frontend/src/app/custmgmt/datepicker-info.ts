import { CustInfoBase } from './cust-info-base';

export class DatepickerInfo extends CustInfoBase<string> {
  controlType = 'datepicker';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
