import { Component, OnInit } from '@angular/core';
import { admin } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {

  admin: admin[] = [];

  constructor(private service: admin) { }

  ngOnInit(): void {
    this.getAllAdmin();
  }

  getAllAdmin() {
    this.service.getAllAdmin().subscribe(
      data => { this.admin = data },
      error => {
        this.admin = [];
        console.log(error);
      }

    );
  }

}
