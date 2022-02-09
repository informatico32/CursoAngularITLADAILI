import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetac3',
  templateUrl: './tarjetac3.component.html',
  styleUrls: ['./tarjetac3.component.css']
})
export class Tarjetac3Component implements OnInit {

  @Input()
  nombre : string ='';
  @Input()
  Biografia : string ='';
  @Input()
  descripcion: string ="";



  constructor() { }

  ngOnInit(): void {
  }

}
