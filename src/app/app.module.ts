import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing.module';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about';
import { EventsComponent } from './events';
import { LinksComponent } from './links';

import { BlogService, NavigationService, ContactService, EventsService } from './shared';
import { ContactComponent } from './contact';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NewsComponent,
    EventsComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [
    BlogService,
    NavigationService,
    ContactService,
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
