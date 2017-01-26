import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared';

@Component({
    templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {

    events: any;

    constructor(public eventsService: EventsService) { }

    ngOnInit() {
        this.eventsService.getEvents()
            .subscribe((events) => {
                this.events = events.data.sort((a, b) => {
                    return new Date(a.start_time).getTime() - new Date(b.start_time).getTime();
                });
            });
    }

    public getDescription(content: string) {
        let description = content.split('\n').join('<br>');
        return this.linkify(description);
    }

    private getDateInt(date: Date) {

    }

    private linkify(plainText): string {
        let replacedText;
        let replacePattern1;
        let replacePattern2;
        let replacePattern3;

        //URLs starting with http://, https://, or ftp://
        replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
        replacedText = plainText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

        //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
        replacePattern2 = /(^|[^\/])((www|goo)\.[\S]+(\b|$))/gim;
        replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

        return replacedText;
    }

    public getFacebookLink(eventId): string {
        return 'https://www.facebook.com/events/' + eventId;
    }

    public getMapLink(place): string {
        if (place.location) {
            return 'http://maps.google.com/?q=' +
                place.location.latitude + ',' +
                place.location.longitude;
        }
    }
}
