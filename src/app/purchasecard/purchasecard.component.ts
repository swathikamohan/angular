import { Component, OnInit } from '@angular/core';
import { purchasecard } from './purchasecard.service';

@Component({
  selector: 'app-purchasecard',
  templateUrl: './purchasecard.component.html',
  styleUrls: ['./purchasecard.component.css']
})
export class PurchasecardComponent implements OnInit {

  purchasecard: purchasecard[] = [];

  constructor(private service: purchasecard) { }

  ngOnInit(): void {
    this.getAllCustomer();
  }

  getAllCustomer() {
    this.service.getAllCustomer().subscribe(
      data => { this.purchasecard = data },
      error => {
        this.purchasecard = [];
        console.log(error);
      }

    );
  }

}
