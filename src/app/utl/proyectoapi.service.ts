import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AlumnosUtl } from './alumnos/alumnos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoapiService {


  URL = "http://127.0.0.1:5000/alumnos";

  private http = inject(HttpClient);


  getAlumnos(): Observable<AlumnosUtl[]> {
    return this.http.get<AlumnosUtl[]>(this.URL);
  }


  agregarNuevoAlumno(datos: AlumnosUtl): Observable<any> {
    return this.http.post(this.URL, datos);
  }


  getAlumno(mat: number): Observable<{ alumno: AlumnosUtl }> {

    return this.http.get<{ alumno: AlumnosUtl }>(`${this.URL}/${mat}`);
  }


  modificarAlumno(mat: number, datos: AlumnosUtl): Observable<any> {
    return this.http.put(`${this.URL}/${mat}`, datos);
  }


  EliminaAlumno(mat: number): Observable<any> {
    return this.http.delete(`${this.URL}/${mat}`);
  }
}
