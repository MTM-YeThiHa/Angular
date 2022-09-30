import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  userName: any;
  formdata: any;
  //create FormGroup
  requiredForm!: FormGroup;
  constructor(private fb: FormBuilder){
    this.myForm();
  }

  //Create required field validator for name
  myForm() {
    this.requiredForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
    });
  }

  ngOnInit() {
    this.formdata = new FormGroup ({
      userName: new FormControl("Tutorialspoint")
    });
  }
  onClickSubmit(data: { userName: any; }) {this.userName = data.userName;}
}
