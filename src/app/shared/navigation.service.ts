import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavigationService {

    private router: Router;

    constructor(private _router: Router) {
        this.router = _router;
    }

    public about(): void {
        this.router.navigate(['/about']);
    }

    public home(): void {
        this.router.navigate(['/']);
    }

    public news(): void {
        this.router.navigate(['/news']);
    }

    public contact(): void {
        this.router.navigate(['/contact']);
    }

    public events(): void {
        window.location.href = 'https://www.facebook.com/pg/noizpromo/events/';
    }

    public store(): void {
        window.location.href = 'http://noizstore.bigcartel.com/';
    }

    public facebook(): void {
        window.location.href = 'https://www.facebook.com/noizpromo/';
    }

}