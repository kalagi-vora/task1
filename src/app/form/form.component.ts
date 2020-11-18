import { Component, OnInit,Output ,EventEmitter,ViewChild,ElementRef} from '@angular/core';
import {empFormData} from '../shared/empform.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // @ViewChild('lname',{static:false}) lnameRef: ElementRef;
  // @ViewChild('fname',{static:false}) fnameRef: ElementRef;
  // @ViewChild('cno',{static:false}) cno: ElementRef;
  // @ViewChild('salary',{static:false}) salary: ElementRef;
  // @ViewChild('role',{static:false}) role: ElementRef;
  @Output() formData = new EventEmitter<empFormData>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmitEvent(fnameref,lnameref,cnoref,salaryref,roleref)
  {
  	const newEmpData = new empFormData(fnameref.value,lnameref.value,cnoref.value,salaryref.value,roleref.value);
  	this.formData.emit(newEmpData);
  }

}
