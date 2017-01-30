import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../shared';
import { EventsService } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public interval: number = 3000;
  public slides: any[];

  constructor(public navigationService: NavigationService, private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.getEvents()
      .subscribe((response) => {
        let events = response.data.sort((a, b) => {
          return new Date(a.start_time).getTime() - new Date(b.start_time).getTime();
        });

        events = events.slice(0, 5);

        this.slides = [];
        events.forEach(event => {
          this.slides.push({
            image: event.cover.source,
            caption: event.name,
            id: event.id,
            date: event.start_time
          });
        });
      });
  }

  getEventLink(eventId) {
    return this.navigationService.events() +  '?eventId=' + eventId;
  }

  isActive(slide: any) {
    return slide === this.slides[0];
  }

}
