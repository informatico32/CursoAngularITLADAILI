import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {


        @Input()
        Producto: Array<{id: number, Categoria: string, ubicacion:string }> = [
          { id: 1,  Categoria: "Carnes y Embutidos" ,          ubicacion:"Pasillo #2"},
          { id: 2,  Categoria: "Frutas y Verduras",            ubicacion: "Pasillo #1"},
          { id: 3,  Categoria: "Panadería y Dulces",           ubicacion: "Pasillo #4" },
          { id: 4,  Categoria: "Huevos, Lácteos y Café",       ubicacion: "Pasillo #8"},
          { id: 5,  Categoria: "Aceite, Pasta y Legumbres" ,   ubicacion: "Pasillo #12"},
          { id: 6,  Categoria: "Conservas y Comida Preparada", ubicacion: "Pasillo #16" },
          { id: 7,  Categoria: "Zumos y Bebidas",              ubicacion: "Pasillo #22" },
          { id: 8,  Categoria: "Aperitivos",                   ubicacion: "Pasillo #7"},

          { id: 9,  Categoria:  "Algas, Tofu y Preparados" ,   ubicacion: "Pasillo #6"},
          { id: 10, Categoria: "Infantil",                    ubicacion: "Pasillo #1005" },
          { id: 11, Categoria: "Cosmética y Cuidado Personal",ubicacion: "Pasillo #17" },
          { id: 12, Categoria: "Hogar y Limpieza",            ubicacion: "Pasillo #10"}


        ];

  constructor() { }

  ngOnInit(): void {
  }

}
