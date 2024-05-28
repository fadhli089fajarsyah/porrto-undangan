import { Routes } from '@angular/router';
import { HomeComponent } from './template/home/home.component';
import { LandingPageComponent } from './template/landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  }
];
