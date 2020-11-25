import { Component, OnInit, Input} from '@angular/core';
import { GetColor } from '../color';
import {empFormData} from '../shared/empform.model';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit {
  @Input() dataArray: empFormData[];

  constructor(private getColor: GetColor) { }

  ngOnInit(): void {
  }
  
  getColorOfRow(salary: number){
    return this.getColor.colorIs(salary);
  }

}
