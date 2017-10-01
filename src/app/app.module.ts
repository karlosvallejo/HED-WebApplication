import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Ng4FittextModule} from 'ng4-fittext';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    Ng4FittextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
