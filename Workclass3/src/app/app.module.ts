import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Tarjetac3Component } from './tarjetac3/tarjetac3.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';


@NgModule({
  declarations: [
    AppComponent,
    Tarjetac3Component,
    ListaProductoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
