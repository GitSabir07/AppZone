import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  firstNameAutofilled: boolean | undefined;
  lastNameAutofilled: boolean | undefined
  constructor() {
    this.firstNameAutofilled = true;
    this.lastNameAutofilled = false;
  }

  ngOnInit(): void {

  }

}
