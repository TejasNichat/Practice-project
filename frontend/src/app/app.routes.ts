import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WelcomeUserComponent } from './components/welcome-user/welcome-user.component';
import { WelcomeAdminComponent } from './components/welcome-admin/welcome-admin.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'user',
    component: WelcomeUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: WelcomeAdminComponent,
    canActivate: [AuthGuard],
    data: { role: 'admin' }
  },
  { path: '**', redirectTo: '/login' }
];
