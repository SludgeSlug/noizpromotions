import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ContactService {
    private url: string = 'api/email';

    constructor(private http: Http) {

    }

    sendEmail(emailModel):any {
        this.http.post(this.url, emailModel);
    }
}