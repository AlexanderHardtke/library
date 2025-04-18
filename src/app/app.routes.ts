import { Routes } from '@angular/router';
import { CssTricksComponent } from './home/css-tricks/css-tricks.component';
import { HomeComponent } from './home/home.component';
import { HtmlComponent } from './home/html/html.component';
import { JsBasicsComponent } from './home/js-basics/js-basics.component';
import { AngularComponent } from './home/angular/angular.component';
import { SimpleCrudComponent } from './home/simple-crud/simple-crud.component';
import { AngularFireAuthenticationComponent } from './home/angular-fire-authentication/angular-fire-authentication.component';
import { GitComponent } from './home/git/git.component';
import { BackEndComponent } from './home/back-end/back-end.component';
import { BackEndSerializerComponent } from './home/back-end-serializer/back-end-serializer.component';
import { CmdComponent } from './home/cmd/cmd.component';
import { HostingComponent } from './home/hosting/hosting.component';
import { RaspberrypiComponent } from './home/raspberrypi/raspberrypi.component';
import { TestingComponent } from './home/testing/testing.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'CSS', component: CssTricksComponent },
    { path: 'HTML', component: HtmlComponent },
    { path: 'JS', component: JsBasicsComponent },
    { path: 'Angular', component: AngularComponent },
    { path: 'CRUD', component: SimpleCrudComponent },
    { path: 'AUTH', component: AngularFireAuthenticationComponent },
    { path: 'GIT', component: GitComponent },
    { path: 'BACK', component: BackEndComponent },
    { path: 'SERIAL', component: BackEndSerializerComponent },
    { path: 'TESTING', component: TestingComponent },
    { path: 'CMD', component: CmdComponent },
    { path: 'HOSTING', component: HostingComponent },
    { path: 'RASP', component: RaspberrypiComponent}
];
