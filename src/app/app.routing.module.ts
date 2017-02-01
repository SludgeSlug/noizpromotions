import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NewsComponent } from './news';
import { ContactComponent } from './contact';
import { EventsComponent } from './events';
import { LinksComponent } from './links';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'news',
    component: NewsComponent
  }, {
    path: 'contact',
    component: ContactComponent
  }, {
    path: 'events',
    component: EventsComponent
  }, {
    path: 'links',
    component: LinksComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);