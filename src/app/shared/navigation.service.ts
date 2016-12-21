import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {

    constructor() {
    }

    public about(): string {
        return '/about';
    }

    public home(): string {
        return '/';
    }

    public news(): string {
        return '/news';
    }

    public contact(): string {
        return '/contact';
    }

    public events(): string {
        return 'https://www.facebook.com/pg/noizpromo/events/';
    }

    public store(): string {
        return 'http://noizstore.bigcartel.com/';
    }

    public facebook(): string {
        return 'https://www.facebook.com/noizpromo/';
    }

}