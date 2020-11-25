import { Component, OnInit, Input} from '@angular/core';
import {empFormData} from '../shared/empform.model';
import {GetColor} from '../color';

@Component({
  selector: 'app-projectmanager',
  templateUrl: './projectmanager.component.html',
  styleUrls: ['./projectmanager.component.css']
})
export class ProjectmanagerComponent implements OnInit {
  @Input() dataArray: empFormData[];

  constructor(private getColor: GetColor) {}

  ngOnInit(){
  }

  getColorOfRow(salary: number){
    return this.getColor.colorIs(salary);
  }
}
