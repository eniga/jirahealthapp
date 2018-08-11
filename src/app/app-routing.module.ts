import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { CentresComponent } from './centres/centres.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PatientsComponent } from './patients/patients.component';
import { ServicesComponent } from './services/services.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'patients',
    component: PatientsComponent
  },
  {
    path: 'appointments',
    component: AppointmentsComponent
  },
  {
    path: 'centres',
    component: CentresComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
