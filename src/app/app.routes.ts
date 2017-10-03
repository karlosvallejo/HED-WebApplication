import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {PonentesComponent} from './ponentes/ponentes.component';
import {AboutComponent} from "./about/about.component";
import {AgendaComponent} from "./agenda/agenda.component";
//import {GaleriaComponent} from './galeria/galeria.component';
//import {PatrocinadoresComponent} from './patrocinadores/patrocinadores.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'ponentes', component: PonentesComponent},
    {path: 'about', component: AboutComponent},
    {path: 'agenda', component: AgendaComponent},
 // {path: 'patrocinadores', component: PatrocinadoresComponent},
 // {path: 'acerca', component: QueEsComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
