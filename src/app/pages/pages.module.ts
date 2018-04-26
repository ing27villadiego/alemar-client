import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';


import { ChartsModule } from 'ng2-charts';

import { SharedModule } from '../shared/shared.module';




import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';
import { CarsComponent } from './cars/cars.component';
import { CarsNewComponent } from './cars/cars-new/cars-new.component';
import { ChaufferursComponent } from './chaufferurs/chaufferurs.component';
import { ChaufferusNewComponent } from './chaufferurs/chaufferus-new/chaufferus-new.component';
import { ContractsComponent } from './contracts/contracts.component';
import { GasolineComponent } from './gasoline/gasoline.component';
import { GasolineNewComponent } from './gasoline/gasoline-new/gasoline-new.component';
import { MaintenancesComponent } from './maintenances/maintenances.component';
import { MaintenanceNewComponent } from './maintenances/maintenance-new/maintenance-new.component';
import { UsersComponent } from './users/users.component';
import { UserNewComponent } from './users/user-new/user-new.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        GraficasComponent,
        CarsComponent,
        CarsNewComponent,
        ChaufferursComponent,
        ChaufferusNewComponent,
        ContractsComponent,
        GasolineComponent,
        GasolineNewComponent,
        MaintenancesComponent,
        MaintenanceNewComponent,
        UsersComponent,
        UserNewComponent,
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        GraficasComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        ChartsModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class PagesModule { }
