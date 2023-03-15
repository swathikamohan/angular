import { Component, OnInit } from '@angular/core';
import { customer } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.less']
})
export class CustomerComponent implements OnInit {

  customer: customer[] = [];

  constructor(private service: customer) { }

  ngOnInit(): void {
    this.getAllCustomers();
  }

  // getAllCustomers() {
  //   throw new Error('Method not implemented.');
  // }

  getAllCustomers() {
    this.service.getAllCustomers().subscribe(
      data => { this.customer = data },
      error => {
        this.customer = [];
        console.log(error);
      }

    );
  }

}