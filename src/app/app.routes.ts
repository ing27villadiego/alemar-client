import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraficasComponent } from './pages/graficas/graficas.component';


const appRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'vehiculos', component: ProgressComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas', component: GraficasComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NopagefoundComponent }
];

export const app_routing = RouterModule.forRoot(appRoutes, { useHash: true });
