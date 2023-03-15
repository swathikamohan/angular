import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class customer{

    private baseUrl: string = 'http://localhost:9002/customer';

    customerId: any;
    customerEmail: any;
    customerAge: any;
    customerNumber:any;
    customerName:any;


    constructor(private http: HttpClient) { }

    getAllCustomers(): Observable<customer[]> {
        return this.http.get<customer[]>(`${this.baseUrl}/getall`);
    }

}