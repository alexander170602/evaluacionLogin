import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
//import { LoginComponent } from './vistas/login/login.component';
//import { DashboardComponent } from './vistas/dashboard/dashboard.component';
//import { ApiComponent } from './servicios/api/api.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
 //   LoginComponent,
   // DashboardComponent,
 //   ApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
