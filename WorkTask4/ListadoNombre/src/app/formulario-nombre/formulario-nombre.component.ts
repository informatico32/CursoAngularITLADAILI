import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../Models/Persona';

@Component({
  selector: 'app-formulario-nombre',
  templateUrl: './formulario-nombre.component.html',
  styleUrls: ['./formulario-nombre.component.css']
})
export class FormularioNombreComponent implements OnInit {

  @Input()
  public personas : Persona[] =[];
  public nombred: string="";
  public titulo: string="";
  public Biog: string="";


  constructor() { }

  ngOnInit(): void {


  }

  public Agregar(){

    let personad : Persona={
      id:1,
      nombre: this.nombred,
      titulo: this.titulo,
      Biog: this.Biog


    };
    this.personas.push(personad);

  }

}
