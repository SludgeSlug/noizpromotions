import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing.module';

import { MenuComponent } from './menu/menu.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about';

import { BlogService, NavigationService } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GalleryComponent,
    HomeComponent,
    AboutComponent
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
    NavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
