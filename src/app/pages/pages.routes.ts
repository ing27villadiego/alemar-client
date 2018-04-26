import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';
import { CarsComponent } from './cars/cars.component'
import { CarsNewComponent } from './cars/cars-new/cars-new.component';
import { ChaufferursComponent } from './chaufferurs/chaufferurs.component';
import { ChaufferusNewComponent} from './chaufferurs/chaufferus-new/chaufferus-new.component';
import { ContractsComponent } from './contracts/contracts.component';
import { GasolineComponent } from './gasoline/gasoline.component';
import { GasolineNewComponent } from './gasoline/gasoline-new/gasoline-new.component';
import { MaintenancesComponent } from './maintenances/maintenances.component';
import { MaintenanceNewComponent } from './maintenances/maintenance-new/maintenance-new.component';
import { UsersComponent } from './users/users.component';
import { UserNewComponent } from './users/user-new/user-new.component';

//GuardLogin proteccion de rutas con guard
import { LoginGuardGuard } from '../services/service.index';




const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [LoginGuardGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'users', component: UsersComponent },
            { path: 'users-new', component: UserNewComponent },
            { path: 'contracts', component: ContractsComponent },
            { path: 'cars', component: CarsComponent},
            { path: 'cars-new', component: CarsNewComponent},
            { path: 'gasolines', component: GasolineComponent},
            { path: 'gasolines-new', component: GasolineNewComponent},
            { path: 'maintenances', component: MaintenancesComponent},
            { path: 'maintenances-new', component: MaintenanceNewComponent},
            { path: 'chaufferurs', component: ChaufferursComponent },
            { path: 'chaufferurs-new', component: ChaufferusNewComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas', component: GraficasComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
