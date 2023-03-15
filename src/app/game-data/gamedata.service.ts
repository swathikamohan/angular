import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class game {
    
    private baseUrl: string = 'http://localhost:8050/gamedata';

    gameId: any;
    gameName: any;
    gameType: any;
    cost: any;

    constructor(private http: HttpClient) { }

    getAllGames(): Observable<game[]> {
        return this.http.get<game[]>(`${this.baseUrl}/getall`);
    }
}


