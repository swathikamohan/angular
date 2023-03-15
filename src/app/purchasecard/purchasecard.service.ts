import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class purchasecard {

    private baseUrl: string = 'http://localhost:9002/purchasecard';
    purchaseId: any;
    customerName: any;
    price: any;
    paymentMode: any;

    constructor(private http: HttpClient) { }

    getAllCustomer(): Observable<purchasecard[]> {
        return this.http.get<purchasecard[]>(`${this.baseUrl}/getall`);
    }

}