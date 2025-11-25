import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlumnoFilterPipe } from '../alumnos-filter.pipe';
import { ProyectoapiService } from '../proyectoapi.service';
import { AlumnosUtl } from '../alumnos/alumnos';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    AlumnoFilterPipe
  ],
  templateUrl: './alumnos.component.html'
})
export class AlumnosComponent implements OnInit {


  alumnos: AlumnosUtl[] = [];
  listFilter: string = '';
  loading: boolean = true;
  errorMessage: string | null = null;


  private api = inject(ProyectoapiService);

    ngOnInit(): void {
  this.api.getAlumnos().subscribe(resp => {
    this.alumnos = resp;
  });
}


  cargarAlumnos(): void {
    this.loading = true;
    this.errorMessage = null;

    this.api.getAlumnos().subscribe({
      next: (resp) => {

        this.alumnos = resp;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar alumnos:', err);
        this.errorMessage = 'No se pudieron cargar los datos de los alumnos. Asegúrate de que el servidor esté corriendo.';
        this.loading = false;
      }
    });
  }
}
