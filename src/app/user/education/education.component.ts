import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  items=[
    {isOpen:true},
    {isOpen:true},
    {isOpen:true},
    {isOpen:true},
    {isOpen:true},
  ];

toggel(index:number){
this.items[index].isOpen=!this.items[index].isOpen;
}
}
