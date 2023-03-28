import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent {
  pregunta: string;
  constructor(private http: HttpClient) { }
  enviarPregunta() {
    this.http.post('http://localhost:3000/preguntas', { pregunta: this.pregunta })
      .subscribe(
        response => {
          console.log('Pregunta enviada correctamente');

        },
        error => {
          console.error('Error al enviar la pregunta', error);

        }
      );
  }
}
