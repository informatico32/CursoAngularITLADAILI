import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {


        @Input()
        //Desclaracion de objeto con la clase typo array donde se definen los tipo de dato y campo
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

         @Input()//descorador para publicar a otros componente variable o objeto u array etc
         //Desclaracion de objeto en typescript
          books: object[] = [
          { id: 1, name: "Book 1" },
          { id: 2, name: "Book 2" },
          { id: 3, name: "Book 3" },
          { id: 4, name: "Book 4 " }
        ];
///el objeto se puede declarar usando el anytipo
        arrays:Array<string> = ['one','two','three'];
        books2: Array<any> = [
          { title: "book1", description: "book desc 1" },
          { title: "book2", description: "book desc 2" },
          { title: "book3", description: "book desc 3" },
          { title: "book4", description: "book desc 4 " }
        ];



  constructor() { }

  ngOnInit(): void {
  }

}
