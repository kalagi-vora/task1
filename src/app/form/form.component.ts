import { Component, OnInit,Output ,EventEmitter,ViewChild,ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {empFormData} from '../shared/empform.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  @Output() formData = new EventEmitter<empFormData>();
  
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(20), Validators.pattern(/^\S*$/)]],
      lastName: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(20), Validators.pattern(/^\S*$/)]],
      contactNo: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      salary: ['',[ Validators.required, Validators.pattern(/^\d*$/)]],
      role : ['',Validators.required]
    })
  }

  get data() { return this.registerForm.controls; }

  onSubmit() {
    const value = this.registerForm.value;
    const newEmpData = new empFormData(value.firstName , value.lastName,value.contactNo, value.salary, value.role);
    this.formData.emit(newEmpData);
  }
}
