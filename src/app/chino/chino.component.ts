import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Chinoformula } from './chinoformula';

@Component({
  selector: 'app-chino',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './chino.component.html',
  styleUrls: ['./chino.component.css']
})
export class ChinoComponent {
  formulario!: FormGroup;
  resultado: string = '';
  edad: number = 0;
  signo: string = '';
  imagen: string = '';
  chino: Chinoformula = new Chinoformula();

  imagenes: { [key: string]: string } = {
    rata: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Rata.jpg',
    buey: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Buey.jpg',
    tigre: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Tigre.jpg',
    conejo: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Conejo.jpg',
    dragon: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Dragon.jpg',
    serpiente: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Serpiente.jpg',
    caballo: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Caballo.jpg',
    cabra: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Cabra.jpg',
    mono: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Mono.jpg',
    gallo: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Gallo.jpg',
    perro: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Perro.jpg',
    cerdo: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Cerdo.jpg'
  };

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apellidoP: new FormControl(''),
      apellidoM: new FormControl(''),
      dia: new FormControl(''),
      mes: new FormControl(''),
      anio: new FormControl(''),
      sexo: new FormControl('')
    });
  }

  imprimir(): void {
    this.chino.asignarDatos(
      this.formulario.value.nombre,
      this.formulario.value.apellidoP,
      this.formulario.value.apellidoM,
      Number(this.formulario.value.dia),
      Number(this.formulario.value.mes),
      Number(this.formulario.value.anio),
      this.formulario.value.sexo
    );

    this.edad = this.chino.calcularEdad();
    this.signo = this.chino.obtenerSignoChino();
    this.imagen = this.imagenes[this.signo.toLowerCase()];
    this.resultado = 'que tal ' + this.formulario.value.nombre + ' ' + this.formulario.value.apellidoP + ' ' + this.formulario.value.apellidoM;
  }
}
