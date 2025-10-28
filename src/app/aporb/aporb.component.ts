import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Aporbformula } from './aporbformula';

@Component({
  selector: 'app-aporb',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './aporb.component.html',
  styleUrls: ['./aporb.component.css']
})
export class AporbComponent {
  formulario!: FormGroup;
  resultado: number = 0;
  proceso: string = '';
  operacion: Aporbformula = new Aporbformula();

  ngOnInit(): void {
    this.formulario = new FormGroup({
      numero1: new FormControl(''),
      numero2: new FormControl('')
    });
  }

  calcular(): void {
    this.operacion.asignarValores(
      Number(this.formulario.value.numero1),
      Number(this.formulario.value.numero2)
    );
    this.operacion.multiplicar();
    this.resultado = this.operacion.resultado;
    this.proceso = this.operacion.proceso;
  }
}


