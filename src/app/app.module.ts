import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DbzModule } from './dbz/dbz.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ //importamos el modulo DBZ
    BrowserModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
