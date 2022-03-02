import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Persona } from '../Models/Persona';

@Component({
  selector: 'app-formulario-p',
  templateUrl: './formulario-p.component.html',
  styleUrls: ['./formulario-p.component.css']
})
export class FormularioPComponent implements OnInit {
public nombreFormControl = new FormControl('')
public tituloFormControl = new FormControl('')
public sumaryFormControl = new FormControl('')
public personaFormGroup = new FormControl({

  'nombre': this.nombreFormControl,
  'titulo': this.tituloFormControl,
  'sumary': this.sumaryFormControl

});

public titulo : string[];
@Input()
public personas: Persona[]=[];

constructor() {
this.titulo=[
'Diseñador',
'Docente',
'Gerente',
'Licenciad@',
'Matematico'


]



  }

  ngOnInit(): void {


  }

  guardar(){
    this.personas.push({
      id: 1,
      nombre: this.nombreFormControl.value,
      titulo: this.tituloFormControl.value,
      sumary: this.sumaryFormControl.value
    });


  }

}
