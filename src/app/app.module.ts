import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { UsersComponent } from './users/users.component';
import { PatientsComponent } from './patients/patients.component';
import { ServicesComponent } from './services/services.component';
import { CentresComponent } from './centres/centres.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopnavComponent,
    DashboardComponent,
    LoginComponent,
    AppointmentsComponent,
    UsersComponent,
    PatientsComponent,
    ServicesComponent,
    CentresComponent,
    NotificationsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
