import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'recruitment', component: RecruitmentComponent },
    { path: 'services', component: ServicesComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
