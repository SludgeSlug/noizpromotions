import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Jsonp} from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogService {
    private url = 'https://noizpromo.blogspot.com//feeds/posts/default?alt=json-in-script&callback=JSONP_CALLBACK';
    private pageSize: number = 5;

    constructor (private jsonp: Jsonp) {}

    getMostRecentPosts(): Observable<any> {
        let mostRecentPostsUrl = this.url + '&max-results=3';
        return this.jsonp.get(mostRecentPostsUrl)
                        .map(this.extractData);
    }

    getBlogPosts(pageNumber): Observable<any> {
        if (!pageNumber) {
            pageNumber = 0;
        }
        let startIndex = (pageNumber * this.pageSize) + 1; 
        let postsUrl = this.url + '&max-results=' + this.pageSize + '&start-index=' + startIndex;
        return this.jsonp.get(postsUrl)
                        .map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.feed;
    }
}