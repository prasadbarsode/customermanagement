import { CustInfoBase } from './cust-info-base';

export class TextboxInfo extends CustInfoBase<string>{
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
