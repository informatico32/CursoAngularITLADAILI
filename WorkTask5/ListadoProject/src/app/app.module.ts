import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoItemComponent } from './listado-item/listado-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormularioPComponent } from './formulario-p/formulario-p.component';
import { ItemcardComponent } from './itemcard/itemcard.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListadoItemComponent,
    FormularioPComponent,
    ItemcardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
