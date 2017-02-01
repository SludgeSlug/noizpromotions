import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html'
})
export class LinksComponent implements OnInit {

  linksHtml: any;

  constructor(public blogService: BlogService) { }

  ngOnInit() {
      this.blogService.getPages().subscribe((pages) => {
          let linksPage = pages.entry.filter(p => p.title.$t === 'Links')[0];
          this.linksHtml = linksPage.content.$t;
      });
  }

}
