import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class admin {

    private baseUrl: string = 'http://localhost:9002/admin';
    adminId: any;
    adminEmail: any;
    password: any;

    constructor(private http: HttpClient) { }

    getAllAdmin(): Observable<admin[]> {
        return this.http.get<admin[]>(`${this.baseUrl}/getall`);
    }

}