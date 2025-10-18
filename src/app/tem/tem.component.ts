import { Component } from '@angular/core';
import { TemhComponent } from "./temh/temh.component";

@Component({
  selector: 'app-tem',
  imports: [TemhComponent],
  templateUrl: './tem.component.html',
  styleUrl: './tem.component.css'
})
export class TemComponent {
title:string="hola de papa";

mensaje2:string="";
recibirMensaje(event:string){
  this.mensaje2=event;
}
}
