import { Pipe, PipeTransform } from '@angular/core';
import { AlumnosUtl } from './alumnos/alumnos';

@Pipe({
  name: 'alumnoFilter',
  standalone: true
})
export class AlumnoFilterPipe implements PipeTransform {

  transform(value: AlumnosUtl[], args: string): AlumnosUtl[] {
    let filter = args ? args.toLowerCase() : '';

    return filter ? value.filter(
        (alumno: AlumnosUtl) =>
          alumno.nombre.toLowerCase().includes(filter)
      ) : value;
  }
}
