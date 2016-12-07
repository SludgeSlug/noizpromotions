import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  blogPosts: any;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getMostRecentPosts()
      .subscribe((blogPosts) => {
        this.blogPosts = blogPosts;  
      });
    //this.blogPosts = this.blogService.getMostRecentPosts();
    //console.log(this.blogPosts);
  }

}
