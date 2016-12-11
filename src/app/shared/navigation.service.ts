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

    public gallery(): void {
        this.router.navigate(['/gallery']);
    }

    public news(): void {
        this.router.navigate(['/news']);
    }

    public contact(): void {
        this.router.navigate(['/contact']);
    }

}