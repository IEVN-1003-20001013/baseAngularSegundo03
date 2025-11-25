import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProyectoapiService } from '../proyectoapi.service';
import { AlumnosUtl } from '../alumnos/alumnos';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4 text-gray-800">Agregar Nuevo Alumno</h1>
      <form (ngSubmit)="agregar()" class="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl">

        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-1">Matrícula</label>
          <input type="number" [(ngModel)]="nuevoAlumno.matricula" name="matricula" required
                 class="border border-gray-300 rounded-lg p-2 w-full focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-1">Nombre</label>
          <input type="text" [(ngModel)]="nuevoAlumno.nombre" name="nombre" required
                 class="border border-gray-300 rounded-lg p-2 w-full focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-1">Apellido Paterno</label>
          <input type="text" [(ngModel)]="nuevoAlumno.apaterno" name="apaterno" required
                 class="border border-gray-300 rounded-lg p-2 w-full focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-1">Apellido Materno</label>
          <input type="text" [(ngModel)]="nuevoAlumno.amaterno" name="amaterno" required
                 class="border border-gray-300 rounded-lg p-2 w-full focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 font-medium mb-1">Correo</label>
          <input type="email" [(ngModel)]="nuevoAlumno.correo" name="correo" required
                 class="border border-gray-300 rounded-lg p-2 w-full focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <button
          type="submit"
          class="bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg px-5 py-2.5 transition duration-200"
        >
          Guardar Alumno
        </button>

        <button
          type="button"
          [routerLink]="['/utl/listaalumnos']"
          class="bg-gray-500 hover:bg-gray-600 text-white rounded-lg px-5 py-2.5 ml-3 transition duration-200"
        >
          Cancelar
        </button>

      </form>
    </div>
  `
})
export default class AgregarComponent {

  nuevoAlumno: AlumnosUtl = {
    matricula: 0,
    nombre: '',
    apaterno: '',
    amaterno: '',
    correo: ''
  };

  private api = inject(ProyectoapiService);
  private router = inject(Router);

  agregar(): void {
    this.api.agregarNuevoAlumno(this.nuevoAlumno).subscribe({
      next: () => {
        // Muestra un mensaje de éxito en la consola
        console.log('Alumno agregado exitosamente');
      },
      error: (err) => {
        console.error('Error al agregar alumno:', err);
      },
      complete: () => {
        // Navega a la lista después de completar
        this.router.navigate(['/utl/listaalumnos']);
      }
    });
  }
}
