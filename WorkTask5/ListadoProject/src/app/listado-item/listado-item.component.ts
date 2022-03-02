import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../Models/Persona';

@Component({
  selector: 'app-listado-item',
  templateUrl: './listado-item.component.html',
  styleUrls: ['./listado-item.component.css']
})
export class ListadoItemComponent implements OnInit {
@Input()
public personas: Persona[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  Deletepeople(idpersona: Persona) {



    let respuesta = confirm("Esta Seguro Que Desea Eliminar"+ idpersona.nombre + " id es "+idpersona.id );

    if(respuesta===true){

      const index = this.personas.indexOf(idpersona);
      this.personas.splice(index,1);
    }




  }

}
