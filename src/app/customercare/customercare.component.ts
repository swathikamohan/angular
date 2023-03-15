import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { customercare } from './customercare.service';

@Component({
  selector: 'app-customercare',
  templateUrl: './customercare.component.html',
  styleUrls: ['./customercare.component.css']
})
export class CustomercareComponent implements OnInit{

customercare : customercare[] =[];

  constructor(private service:customercare){}

  ngOnInit(): void {
    this.getAllFeedback();
  }
  
  getAllFeedback(){
    this.service.getAllFeedback().subscribe(
      data=>{this.customercare=data},
      error=>{
        this.customercare=[];
        console.log(error);
      }
      
    );
  }
  
}