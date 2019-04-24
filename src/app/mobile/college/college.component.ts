import { Component, OnInit } from '@angular/core';
import { ServiceCollegeService } from '../service-college.service';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})

export class CollegeComponent implements OnInit 
{
  mobId;
  mobName;
  mobPrice;
  arr=[];
  constructor(private ref:ServiceCollegeService) { }//creating refernce of CollegeService

  delete(row)
  {
   const index=this.arr.indexOf(row);
   this.arr.splice(index,1);//splice() function is used to remove elements from an array 
  }
ngOnInit() {
  this.ref.mobileinfo().subscribe(info =>
      {
        this.arr=info;
        console.log(this.arr);
      });
  }
  col: string = "mobId";
  ord: boolean = true;
  sortingRow(col) //sortingRow() is used to sort rows
  { 

    if (this.col == col) {
    this.ord = !this.ord;
  } 
    else 
    {
      this.ord = true;
      this.col= col;
    }
  }
}
