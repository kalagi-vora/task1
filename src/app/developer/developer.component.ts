import { Component, OnInit, Input} from '@angular/core';
import { GetColor } from '../color';
import {empFormData} from '../shared/empform.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  @Input() dataArray: empFormData[];

  constructor(private getColor: GetColor) { }

  ngOnInit(): void {
  }

  getColorOfRow(salary: number){
    return this.getColor.colorIs(salary);
  }

}
