import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class customercare {
    
    private baseUrl: string = 'http://localhost:9002/customercare';
customerId: any;
customerEmail: any;
feedback: any;

    constructor(private http: HttpClient) { }


    getAllFeedback():Observable<customercare[]>{
        return this.http.get<customercare[]>(`${this.baseUrl}/getall`);
    }

}