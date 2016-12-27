import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";


@Injectable()
export class EventService {
    constructor(private http: Http) {
    }

    getEvent(idx) {
        return this.http.get("https://agilecafe-4181d.firebaseio.com/schedule/"+idx+".json").map(res => res.json());
            
    }

   
}