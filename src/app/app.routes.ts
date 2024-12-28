import { Routes } from '@angular/router';
import { CssTricksComponent } from './home/css-tricks/css-tricks.component';
import { HomeComponent } from './home/home.component';
import { HTMLComponent } from './home/html/html.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'CSS', component: CssTricksComponent },
    { path: 'HTML', component: HTMLComponent },
];
