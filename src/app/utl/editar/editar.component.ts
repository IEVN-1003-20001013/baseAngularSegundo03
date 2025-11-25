import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProyectoapiService } from '../proyectoapi.service';
import { AlumnosUtl } from '../alumnos/alumnos';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './editar.component.html'
})
export default class EditarComponent implements OnInit {


  regAlumno: AlumnosUtl = {
    matricula: 0,
    nombre: '',
    apaterno: '',
    amaterno: '',
    correo: ''
  };
  id!: number;

  private route = inject(ActivatedRoute);
  private api = inject(ProyectoapiService);
  private router = inject(Router);

  ngOnInit() {

    const matriculaParam = this.route.snapshot.paramMap.get('id');

    if (matriculaParam) {
      this.id = parseInt(matriculaParam);


      this.api.getAlumno(this.id).subscribe({
        next: resp => {

          this.regAlumno = resp.alumno;
        },
        error: (err) => {
          console.error('Error al obtener alumno para edición:', err);
        }
      });
    } else {
      console.error('Matrícula no encontrada en la URL.');
      this.router.navigate(['/utl/listaalumnos']); // Redirigir si no hay ID
    }
  }

  modificar() {
    this.api.modificarAlumno(this.id, this.regAlumno).subscribe({
      next: () => console.log("Alumno actualizado"),
      error: (err) => console.error('Error al modificar:', err),
      complete: () => this.router.navigate(['/utl/listaalumnos'])
    });
  }
}
