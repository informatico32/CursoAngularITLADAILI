import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../Models/Persona';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {



@Input()
public personacash: Persona[]=[];




  constructor() { }

  ngOnInit(): void {
  }

}
