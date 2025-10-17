export class Chinoformula {
  nombre: string = '';
  apellidoP: string = '';
  apellidoM: string = '';
  dia: number = 0;
  mes: number = 0;
  anio: number = 0;
  sexo: string = '';
  edad: number = 0;
  signo: string = '';
  hoy: Date = new Date();
  signos: string[] = [];

  asignarDatos(nombre: string, apellidoP: string, apellidoM: string, dia: number, mes: number, anio: number, sexo: string): void {
    this.nombre = nombre;
    this.apellidoP = apellidoP;
    this.apellidoM = apellidoM;
    this.dia = dia;
    this.mes = mes;
    this.anio = anio;
    this.sexo = sexo;
  }

  calcularEdad(): number {
    this.hoy = new Date();
    this.edad = this.hoy.getFullYear() - this.anio;

    const mesActual = this.hoy.getMonth() + 1;
    const diaActual = this.hoy.getDate();

    if (mesActual < this.mes) {
      this.edad = this.edad - 1;
    } else {
      if (mesActual === this.mes) {
        if (diaActual < this.dia) {
          this.edad = this.edad - 1;
        }
      }
    }

    return this.edad;
  }

  obtenerSignoChino(): string {
    this.signos = [
      'mono', 'gallo', 'perro', 'cerdo',
      'rata', 'buey', 'tigre', 'conejo',
      'dragon', 'serpiente', 'caballo', 'cabra'
    ];
    this.signo = this.signos[this.anio % 12];
    return this.signo;
  }
}
