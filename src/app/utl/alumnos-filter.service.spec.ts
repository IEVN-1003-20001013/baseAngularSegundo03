import { Pipe, PipeTransform } from '@angular/core';
import { AlumnosUtl } from './alumnos/alumnos';

@Pipe({
  name: 'alumnoFilter',
  standalone: true
})
export class AlumnoFilterPipe implements PipeTransform {

  transform(value: AlumnosUtl[] | null, args: string): AlumnosUtl[] {
    // Si no hay alumnos o el filtro no es una cadena, devuelve el valor original o un array vacío
    if (!value) {
      return [];
    }

    let filter = args ? args.toLowerCase() : '';

    return filter ? value.filter(
      (alumno: AlumnosUtl) =>
        alumno.nombre.toLowerCase().includes(filter)

    ) : value;
  }
}
