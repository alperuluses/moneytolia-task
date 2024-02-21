import { Routes } from '@angular/router';
import { CustomLoginComponent } from './components/custom-login/custom-login.component';
import { CustomDashboardComponent } from './components/custom-dashboard/custom-dashboard.component';
import { authGuard } from './services/auth.guard';
import { CreateCampainComponent } from './components/create-campain/create-campain.component';
import { CustomCampainsComponent } from './components/custom-campains/custom-campains.component';

export const routes: Routes = [
    { path: '', title: "Login", component: CustomLoginComponent },
    {
        path: 'dashboard', title: "Campains", component: CustomDashboardComponent, canActivate: [authGuard], children: [
            { path: '', component: CustomCampainsComponent, canActivate: [authGuard] },
            { path: 'createCampain', title: "Create Campain", component: CreateCampainComponent, canActivate: [authGuard] }
        ]
    },

];
