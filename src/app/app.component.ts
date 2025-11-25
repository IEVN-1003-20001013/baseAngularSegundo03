import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistanciaComponent } from "./formularios/distancia/distancia.component";
import { ChinoComponent } from './chino/chino.component';
import { AporbComponent } from "./aporb/aporb.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { TemhComponent } from "./tem/temh/temh.component";
import { AlumnosComponent } from './utl/alumnos/alumnos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    UpperCasePipe,
    DistanciaComponent,
    ChinoComponent,
    AporbComponent,
    NavbarComponent,
    TemhComponent,
    AlumnosComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo03';
}
