export class Aporbformula {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;
  proceso: string = '';
  contador: number = 0;

  asignarValores(num1: number, num2: number): void {
    this.numero1 = num1;
    this.numero2 = num2;
  }

  multiplicar(): void {
    this.resultado = 0;
    this.proceso = '';
    this.contador = 0;

    while (this.contador < this.numero1) {
      this.resultado = this.resultado + this.numero2;
      this.proceso = this.proceso + this.numero2;
      if (this.contador < this.numero1 - 1) {
        this.proceso = this.proceso + ' + ';
      }
      this.contador = this.contador + 1;
    }

    this.proceso = this.proceso + ' = ' + this.resultado;
  }
}
