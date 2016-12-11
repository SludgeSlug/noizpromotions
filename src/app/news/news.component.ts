import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  blogPosts: any;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getMostRecentPosts()
      .subscribe((blogPosts) => {
        this.blogPosts = blogPosts;  
      });
  }
}
