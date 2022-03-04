import { Component } from '@angular/core';
import { Persona } from './Models/Persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ListadoNombre';
  public personas: Persona[] = [];

}
