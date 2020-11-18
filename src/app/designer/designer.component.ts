import { Component, OnInit, Input} from '@angular/core';
import {empFormData} from '../shared/empform.model';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit {
  @Input() dataarray: empFormData[];
  constructor() { }

  ngOnInit(): void {
  }
  getColor(salary) {
  	if(salary<20000)
  	{
  		return 'black';
  	}
    else if(salary>=20000 && salary<30000){
    	return 'blue';
    }
    else if(salary>=30000 && salary<40000){
    	return 'red';
    }
    else{
    	return 'green';
    }

  }
}
