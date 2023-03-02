import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  firstNameAutofilled: boolean | undefined;
  lastNameAutofilled: boolean | undefined

  ConsentType: any = ['Yes', 'No', 'NA'];
  CompanyType: any = ['Main', 'Subsidiary'];
  CompanyStatus: any = ['NTML', 'TMC', 'OnHold'];
  EmployerType: any = ['MNC', 'Bank', 'Govt'];
  Category: any = ['A', 'B', 'T1', 'T2'];

  constructor(public fb: FormBuilder) {
    this.firstNameAutofilled = true;
    this.lastNameAutofilled = false;
  }
  compantDetailsFrom = this.fb.group({
    name: new FormControl(''),
    code: new FormControl(''),
    approvedAuditor: new FormControl(''),
    tradeLincenseNo: new FormControl(''),
    website: new FormControl(''),
    financialsProvider: new FormControl(''),
    type: new FormControl(''),
    subsidiary: new FormControl(''),
    partners: new FormControl(''),
    status: new FormControl(''),
    financialsAsPerNorm: new FormControl(''),
    employerType: new FormControl(''),
    noOfEmployee: new FormControl(''),
    formationDate: new FormControl(''),
    phone: new FormControl(''),
    poboxno: new FormControl(''),
    address: new FormControl(''),
    category: new FormControl('')
  });
  ngOnInit(): void {

  }

}
