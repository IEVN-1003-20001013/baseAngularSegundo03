import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProyectoapiService } from '../proyectoapi.service';
import { AlumnosUtl } from '../alumnos/alumnos';

@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './eliminar.component.html'
})
export default class EliminarComponent implements OnInit {

  id!: number;
  regAlumno: AlumnosUtl = {
    matricula: 0,
    nombre: '',
    apaterno: '',
    amaterno: '',
    correo: ''
  };

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
          console.error('Error al obtener alumno para eliminar:', err);

        }
      });
    } else {
      console.error('Matrícula no encontrada en la URL.');
      this.router.navigate(['/utl/listaalumnos']);
    }
  }

  eliminar() {
    this.api.EliminaAlumno(this.id).subscribe({
      next: () => console.log(`Alumno con matrícula ${this.id} eliminado`),
      error: (err) => console.error('Error al eliminar:', err),
      complete: () => this.router.navigate(['/utl/listaalumnos'])
    });
  }
}
