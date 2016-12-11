import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { GalleryComponent } from './gallery';
import { AboutComponent } from './about';
import { NewsComponent } from './news';
import { ContactComponent } from './contact';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'news',
    component: NewsComponent
  }, {
    path: 'contact',
    component: ContactComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);