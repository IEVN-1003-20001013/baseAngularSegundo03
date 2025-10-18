import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistanciaComponent } from "./formularios/distancia/distancia.component";
import { DistanciaFormula } from './formularios/distancia/distanciaformula';
import { ChinoComponent } from './chino/chino.component';
import { AporbComponent } from "./aporb/aporb.component";
import {initFlowbite} from 'flowbite'
import { NavbarComponent } from "./navbar/navbar.component";
import { TemhComponent } from "./tem/temh/temh.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DistanciaComponent, ChinoComponent, AporbComponent, NavbarComponent, TemhComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo03';
}
