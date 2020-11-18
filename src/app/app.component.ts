import { Component } from '@angular/core';
import {empFormData} from './shared/empform.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task1';
  devempformdata : empFormData[] =[];
  designerempformdata : empFormData[] =[];
  pmempformdata : empFormData[] =[];

  onAdding(formData: empFormData)
  {
  	if(formData.role==='Developer'){
  		this.devempformdata.push(formData);
  	}
  	else if(formData.role==='Project-Manager'){
  		this.pmempformdata.push(formData);
  	}
  	else{
  		this.designerempformdata.push(formData);
  	}
  }
}
