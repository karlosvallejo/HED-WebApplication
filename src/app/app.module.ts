import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Ng4FittextModule} from 'ng4-fittext';
import {MenuComponent} from './menu/menu.component';
import {firebaseConfig} from './fireConfig';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import {routes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    routes,
    BrowserModule,
    AngularFireAuthModule, AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    Ng4FittextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
