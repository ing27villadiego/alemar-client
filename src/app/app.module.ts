import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import module de animations de material io
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//import module de component de material io
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';

//import for routing rutas principal de la applicacion
import { app_routing } from './app.routes';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GraficasComponent } from './pages/graficas/graficas.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GraficasComponent,
    ProgressComponent,
    BreadcrumbsComponent,
    NopagefoundComponent,
    HeaderComponent,
    LoginComponent,
    PagesComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
