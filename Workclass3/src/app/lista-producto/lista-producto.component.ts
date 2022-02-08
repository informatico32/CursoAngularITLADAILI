import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

@Input()
  categoria : string [] =[
  "Carnes y Embutidos",
  "Frutas y Verduras",
  "Panadería y Dulces",
  "Huevos, Lácteos y Café",
  "Aceite, Pasta y Legumbres",
  "Conservas y Comida Preparada",
  "Zumos y Bebidas",
  "Aperitivos",
  "Algas, Tofu y Preparados",
  "Infantil",
  "Cosmética y Cuidado Personal",
  "Hogar y Limpieza"
    ];
    @Input()
    Ubicacioncategoria : string [] =[
      "Pasillo #2",
      "Pasillo #1",
      "Pasillo #4",
      "Pasillo #8",
      "Pasillo #12",
      "Pasillo #16",
      "Pasillo #22",
      "Pasillo #7",
      "Pasillo #6",
      "Pasillo #005",
      "Pasillo #17",
      "Pasillo #10",
        ];

        producto : object ={

          nombre: "miguel",
          categoria:"guayaba"



        }

  constructor() { }

  ngOnInit(): void {
  }

}
