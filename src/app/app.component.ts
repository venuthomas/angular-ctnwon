import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { CustomErrorStateMatcher } from './error-state-matcher';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mat-custom-control-with-validation';

  myForm: FormGroup;

  matcher = new CustomErrorStateMatcher();
  @ViewChild('select2')
  select2: MatSelect;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      favoriteFood: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    console.log('ooo')
    console.log(this.select2.placeholder);
  }

  submitForm() {
  //  console.log(this.myForm.value);
  }
}
