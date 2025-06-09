import { Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { HomePage } from './home/home.page';
import { PerfilPage } from './perfil/perfil.page';
import { ReservasPage } from './reservas/reservas.page';
import { ServiciosPage } from './servicios/servicios.page';



export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'home', component: HomePage },
  { path: 'perfil', component: PerfilPage },
  { path: 'reservas', component: ReservasPage },
  { path: 'servicios', component: ServiciosPage },
];