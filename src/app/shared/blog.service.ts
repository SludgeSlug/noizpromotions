import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Jsonp} from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogService {
    private url = 'https://noiztest.blogspot.com/feeds/posts/default?alt=json-in-script&callback=JSONP_CALLBACK';

    constructor (private jsonp: Jsonp) {}

    getMostRecentPosts(): Observable<any[]> {
        let mostRecentPostsUrl = this.url + '&max-results=3';
        return this.jsonp.get(mostRecentPostsUrl)
                        .map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.feed.entry;
    }
}