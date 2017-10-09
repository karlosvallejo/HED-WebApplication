import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Ng4FittextModule} from 'ng4-fittext';
import {MenuComponent} from './menu/menu.component';

// AngularFire Imports -------------------------------------------
import {firebaseConfig} from './fireConfig';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
// --------------------------------------------------------------
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import {routes} from './app.routes';
import { PonentesComponent } from './ponentes/ponentes.component';
import { AboutComponent } from './about/about.component';
import { AgendaComponent } from './agenda/agenda.component';
import { CuadroInfoComponent } from './agenda/cuadro-info/cuadro-info.component';
import { GaleriaComponent } from './galeria/galeria.component';
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
    GaleriaComponent
  ],
  imports: [
    routes,
    BrowserModule,
    BrowserAnimationsModule,
    // AngularFire2 ----------------------------
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    // -------------------------------------------
    Ng4FittextModule
  ],
  providers: [GeneralServices],
  bootstrap: [AppComponent]
})
export class AppModule {
}
