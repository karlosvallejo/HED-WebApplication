import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {PonentesComponent} from './ponentes/ponentes.component';
import {AboutComponent} from './about/about.component';
import {AgendaComponent} from './agenda/agenda.component';
import {GaleriaComponent} from './galeria/galeria.component';



const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent, data: { state: 'home' }},
    {path: 'ponentes', component: PonentesComponent, data: { state: 'ponentes' }},
    {path: 'agenda', component: AgendaComponent, data: { state: 'agenda' }},
    {path: 'about', component: AboutComponent, data: { state: 'about' }},
    {path: 'galeria', component: GaleriaComponent, data: { state: 'galeria' }}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
