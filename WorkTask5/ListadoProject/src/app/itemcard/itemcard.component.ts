import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from '../Models/Persona';

@Component({
  selector: 'app-itemcard',
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.css']
})
export class ItemcardComponent implements OnInit {

  @Input()
  persona: Persona = {
    id:0,
    titulo: '',
    nombre: '',
    sumary: ''
  }

  @Output()
  public onBorrar: EventEmitter<Persona> = new EventEmitter<Persona>();
  constructor() { }

  ngOnInit(): void {
  }



  Delete(persona : Persona){
    this.onBorrar.emit(this.persona);
  }

}
