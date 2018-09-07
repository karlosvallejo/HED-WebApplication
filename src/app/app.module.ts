import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {Ng4FittextModule} from 'ng4-fittext';
import {MenuComponent} from './menu/menu.component';

// AngularFire Imports -------------------------------------------
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
// --------------------------------------------------------------
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import {routes} from './app.routes';
import { PonentesComponent } from './ponentes/ponentes.component';
import { AboutComponent } from './about/about.component';
import { AgendaComponent } from './agenda/agenda.component';
import { CuadroInfoComponent } from './agenda/cuadro-info/cuadro-info.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { BackgroundComponent } from './background/background.component';
import {environment} from '../environments/environment';
import {GeneralServices} from './services/services.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    PonentesComponent,
    AboutComponent,
    AgendaComponent,
    CuadroInfoComponent,
    GaleriaComponent,
    BackgroundComponent
  ],
  imports: [
    routes,
    BrowserModule,
    BrowserAnimationsModule,
    // AngularFire2 ----------------------------
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    // -------------------------------------------
    Ng4FittextModule
  ],
  providers: [GeneralServices],
  bootstrap: [AppComponent]
})
export class AppModule {
}
