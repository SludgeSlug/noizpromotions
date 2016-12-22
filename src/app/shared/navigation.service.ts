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

    public twitter(): string{
        return 'https://twitter.com/noizpromotions';
    }

    public youtube(): string{
        return 'https://www.youtube.com/playlist?list=PL5Md2SIoT8pmNcSjum2mi3Tr7e4fuKK0m';
    }

    public bigcartel(): string{
        return 'http://noizstore.bigcartel.com/';
    }

    public skiddle(): string{
        return 'https://www.skiddle.com/whats-on/Manchester/Rebellion/Noiz-all-dayer/12678694/';
    }

}