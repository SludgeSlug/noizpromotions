import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../shared';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private router: Router;
  public navigationService: NavigationService;

  constructor(private _router: Router, private _navigationService: NavigationService) {
    this.router = _router;
    this.navigationService = _navigationService;
  }

  ngOnInit() {
  }

  public activePage(pageName: string) {
    if (this.router.url.indexOf(pageName) > -1) {
      return true;
    }
    if (pageName === 'home' && this.router.url === '/') {
      return true;
    }
    return false;
  }

}
