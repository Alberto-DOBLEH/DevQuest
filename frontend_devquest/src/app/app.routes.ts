import { Routes } from '@angular/router';
import { Landpage } from './pages/landpage/landpage';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { LandpageWs } from './pages/landpage-ws/landpage-ws';

export const routes: Routes = [
    {path : '', component: Landpage},
    {path : 'login', component: Login},
    {path : 'registro', component: Registro},
    {path : 'landpage', component: LandpageWs}
];
