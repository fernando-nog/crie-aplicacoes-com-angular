import { Component } from '@angular/core';

import { AlertaService } from './alerta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Livro Angular 4';
  foto: string = 'favicon.ico';

  desenvolvimento: string [] = ['Angular 2', 'JavaScript', 'TypeScript', 'HTML', 'CSS'];

  constructor(private service: AlertaService){ }

  enviarMsg(): void {
    this.service.msgAlerta();
  }

}
