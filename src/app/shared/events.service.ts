import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class EventsService {
    private accessToken: string = '185095361963610|JADO9ClJonhjiMzEIcgOhRO5iFo';
    private url: string = 'https://graph.facebook.com/v2.8/noizpromo/events';
    
    constructor(private http: Http) {

    }

    getEvents():any {
        let url = this.url + '?access_token=' + this.accessToken + 
            '&fields=id,start_time,cover,description,name,place&since=1484691615';
        return this.http.get(url)
            .map((res:Response) => res.json());
    }
}