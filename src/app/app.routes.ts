import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './home/home.component';
//import {PonentesComponent} from './ponentes/ponentes.component';
//import {GaleriaComponent} from './galeria/galeria.component';
//import {TestimoniosComponent} from './testimonios/testimonios.component';
//import {PatrocinadoresComponent} from './patrocinadores/patrocinadores.component';
//import {QueEsComponent} from './que-es/que-es.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
 // {path: 'ponentes', component: PonentesComponent},
 // {path: 'galeria', component: GaleriaComponent},
 // {path: 'comentarios', component: TestimoniosComponent},
 // {path: 'patrocinadores', component: PatrocinadoresComponent},
 // {path: 'acerca', component: QueEsComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
