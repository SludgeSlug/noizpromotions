import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../shared';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  constructor(public navigationService: NavigationService) { }

  ngOnInit() {
  }

}
