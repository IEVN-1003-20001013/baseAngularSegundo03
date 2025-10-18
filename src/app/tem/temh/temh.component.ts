import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-temh',
  standalone: true,
  imports: [],
  templateUrl: './temh.component.html',
  styleUrls: ['./temh.component.css']
})
export class TemhComponent {
  @Input() mensaje!: string;
  @Output() mensaje2 = new EventEmitter<string>();

  enviarMensaje() {
    this.mensaje2.emit('mensaje desde temh component');
  }
}
