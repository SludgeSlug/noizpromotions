import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService, NavigationService } from '../shared';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy {

  blogPosts: any;
  olderPage: number;
  newPage: number;
  newsUrl: string;
  private subscription: Subscription;

  constructor(
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
    private navigationService: NavigationService) { }

  ngOnInit() {
    this.newsUrl = this.navigationService.news();
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        let pageNumber: number = Number.parseInt(param['page']);
        this.blogService.getBlogPosts(pageNumber)
          .subscribe((blogPosts) => {
            this.blogPosts = blogPosts.entry;
            let totalResults = blogPosts.openSearch$totalResults.$t;
            let pageSize = blogPosts.openSearch$itemsPerPage.$t;
            this.newPage = pageNumber - 1;
            if (!pageNumber) {
              pageNumber = 0;
            }
            if ((pageSize * (pageNumber + 1)) < totalResults) {
              this.olderPage = pageNumber + 1;
            } else {
              this.olderPage = undefined;
            }
          });
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
