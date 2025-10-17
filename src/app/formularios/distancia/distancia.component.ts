import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DistanciaFormula } from './distanciaformula';

@Component({
  selector: 'app-distancia',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class DistanciaComponent {
  formulario!: FormGroup;
  distanciaResultado: number | null = null;
  operacion: DistanciaFormula = new DistanciaFormula();

  ngOnInit(): void {
    this.formulario = new FormGroup({
      x1: new FormControl(''),
      y1: new FormControl(''),
      x2: new FormControl(''),
      y2: new FormControl('')
    });
  }

  calcularDistancia(): void {
    this.operacion.asignarValores(
      Number(this.formulario.value.x1),
      Number(this.formulario.value.y1),
      Number(this.formulario.value.x2),
      Number(this.formulario.value.y2),
    );
    this.distanciaResultado = Number(this.operacion.calcular().toFixed(2));
  }
}
