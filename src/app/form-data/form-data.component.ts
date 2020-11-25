import { Component, OnInit } from '@angular/core';
import { empFormData } from '../shared/empform.model';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {

  developerFormData : empFormData[] = [];
  designerFormData : empFormData[] = [];
  projectManagerFormData : empFormData[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  
  onAdding(formData: empFormData)
  {
  	if(formData.role==='Developer'){
      this.developerFormData.push(formData);
  	}
  	else if(formData.role==='Project-Manager'){
      this.projectManagerFormData.push(formData);
  	}
  	else{
      this.designerFormData.push(formData);
  	}
  }

}
