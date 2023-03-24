import { Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register',
  template: `
    <h1>Registrar Usuari</h1>
    <form (submit)="onSubmit()">
      <label>
        Correu electrònic:
        <input type="email" [(ngModel)]="email" name="email" required>
      </label>
      <label>
        Contrasenya:
        <input type="password" [(ngModel)]="password" name="password" required>
      </label>
      <button type="submit">Crear usuari</button>
    </form>
  `
})
export class RegisterComponent {

  email = '';
  password = '';

  constructor(private http: HttpClient) { }
  onSubmit(){
    const userData = {
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:3000/users', userData)
      .subscribe((response: any) => {
        console.log('Usuari creat correctament', response);
      }, (error: any) => {
        console.error('Error al crear usuari', error);
      });

  }

}
