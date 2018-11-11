import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';

import { CustomerType } from '../../model/customer-type';
import { CustInfoBase } from '../cust-info-base';
import { EditCustControlService } from '../../services/edit-cust-control.service';
import { CustdetailsService } from '../../services/custdetails.service';
import { ActivatedRoute, Router } from '@angular/router';

import { ValidaterulesService } from '../../services/validaterules.service';

@Component({
  selector: 'app-gen-edit-form-group',
  templateUrl: './gen-edit-form-group.component.html',
  styleUrls: ['./gen-edit-form-group.component.css'],
  providers: [EditCustControlService],
})
export class GenEditFormGroupComponent implements OnInit, OnDestroy{

  @Input() custInfoToBeEdited: CustInfoBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
  custId;
  contractExpDateDisplayFormat: any;
  customerType;
  europeTimeZoneOffset;
  complianceChecked: boolean;

  @Input() customerDataRes : any = {};
  editedCustomerData: {};
  custType = new CustomerType();

  constructor(
    private custdetailsService: CustdetailsService,
    private route: ActivatedRoute,
    private router: Router,
    private editCustControlService: EditCustControlService,
    private validaterulesService: ValidaterulesService
  ) {
    this.custId = this.route.snapshot.params.id;
  }

  ngOnInit() {
      this.createForm();
  }

  onSubmit() {
    //Get revised contract expiry date as per EU offset format
    let contractExp = this.validaterulesService.getContractExpiryDateinUTCFomrt(this.form.controls['contractExpiryDate'].value,this.europeTimeZoneOffset);
    
    if(this.customerDataRes.type==this.custType.bigCustomerType){
      //Set compliance checked status in boolean format
      if(this.form.controls['complianceChecked'].value == "true"){
        this.complianceChecked = true;
      }else if(this.form.controls['complianceChecked'].value == "false"
      || this.form.controls['complianceChecked'].value == null
      || this.form.controls['complianceChecked'].value == ""){
        this.complianceChecked = false;
    
      }

        //Request body object with updated customer details
        const editedCustomerData = {
        _id: this.customerDataRes._id,  
        id: this.customerDataRes.id,
        type: this.customerDataRes.type,
        name: this.form.controls['name'].value,
        country: this.form.controls['country'].value,
        websiteUrl: this.form.controls['websiteUrl'].value,
        numberOfEmployees: parseInt(this.form.controls['numberOfEmployees'].value),
        contractExpiryDate: contractExp,
        annualTurnover: parseInt(this.form.controls['annualTurnover'].value),
        complianceChecked: this.complianceChecked
      };
      
      // Update existing big customer details
      this.custdetailsService.updateCustomerDetail(editedCustomerData).subscribe(data => {
      if(data.success){
            alert("Details updated successfully");
            setTimeout(()=>{
                this.router.navigate(['/']);
            },1000);
            this.payLoad = JSON.stringify(this.form.value);
        }else{
          alert("Details could not be updated. Please try again");
        }    
      });
    }else if(this.customerDataRes.type==this.custType.smallCustomerType){
      const editedCustomerData = {
        _id: this.customerDataRes._id,  
        id: this.customerDataRes.id,
        type: this.customerDataRes.type,
        name: this.form.controls['name'].value,
        country: this.form.controls['country'].value,
        websiteUrl: this.form.controls['websiteUrl'].value,
        numberOfEmployees: parseInt(this.form.controls['numberOfEmployees'].value),
        contractExpiryDate: contractExp,
      };
      
      // Update existing small customer details through service call
      this.custdetailsService.updateCustomerDetail(editedCustomerData).subscribe(data => {
        if(data.success){
            alert("Details updated successfully");
            setTimeout(()=>{
              this.router.navigate(['/']);
            },1000);
            this.payLoad = JSON.stringify(this.form.value);
          }else{
            alert("Details could not be updated. Please try again");
          }   
        });
    }
  }

  createForm(){
  
    this.custdetailsService.getSelectedCustomerInfo(this.custId).subscribe(data => {
      //Receive data from backend
      this.customerDataRes = data;
      
      //get UTC date in correct format as it has extra space in test data
      this.customerDataRes.contractExpiryDate = this.validaterulesService.convertUTCtoDateformat(this.customerDataRes.contractExpiryDate);
      
      //Annual turnover and Compliance checked not required in case of small customers
      if (this.customerDataRes.type==1){
        this.custInfoToBeEdited = this.custInfoToBeEdited.filter((custInfoToBeEdited)=>{
          return custInfoToBeEdited.key!='annualTurnover' && custInfoToBeEdited.key!='complianceChecked'
        });
      }

      //Populate FormGroup
      this.form = this.editCustControlService.toFormGroup(this.custInfoToBeEdited, this.customerDataRes);
      
      //Set display date in yyyy-MM-dd as it is only accepted format in ng-Bootstrap
      this.form.value.contractExpiryDate = new Date(this.form.value.contractExpiryDate);
      
      this.form.controls['contractExpiryDate'].setValue({
        year: parseInt(this.form.value.contractExpiryDate.getFullYear()),
        month: parseInt(this.form.value.contractExpiryDate.getMonth() + 1),
        day: parseInt(this.form.value.contractExpiryDate.getDate()),
        hour: parseInt(this.form.value.contractExpiryDate.getHours()),
        minute: parseInt(this.form.value.contractExpiryDate.getMinutes()),
        seconds: parseInt(this.form.value.contractExpiryDate.getSeconds()),
      });

      //Add customer type as hidden field as it is not displayed on screen
      //It is used to differentiate between max date for small and big customers
      this.form.addControl('customerType', new FormControl('', Validators.required));
      this.form.controls['customerType'].setValue(this.customerDataRes.type);
    }); 

  }

  ngOnDestroy(){
    this.custdetailsService.getSelectedCustomerInfo(this.custId).subscribe().unsubscribe();
  }
}
