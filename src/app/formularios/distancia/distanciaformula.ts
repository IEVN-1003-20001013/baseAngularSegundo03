export class DistanciaFormula {
  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;
  dx: number = 0;
  dy: number = 0;

  asignarValores(x1: number, y1: number, x2: number, y2: number): void {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  calcular(): number {
    this.dx = this.x2 - this.x1;
    this.dy = this.y2 - this.y1;
    return Math.sqrt(this.dx * this.dx + this.dy * this.dy);
  }
}

