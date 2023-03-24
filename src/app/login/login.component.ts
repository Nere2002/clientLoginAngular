import { Component} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-login',
  template: `
    <h1>Iniciar sessió</h1>
    <form (ngSubmit)="onSubmit()">
      <label>
        Correu electrònic:
        <input type="email" [(ngModel)]="email" name="email" required>
      </label>
      <label>
        Contrasenya:
        <input type="password" [(ngModel)]="password" name="password" required>
      </label>
      <button type="submit">Iniciar sessió</button>
    </form>
  `,
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private afAuth: AngularFireAuth) {}

  onSubmit() {
    this.afAuth.signInWithEmailAndPassword(this.email, this.password)
      .then(userCredential => {
        if (userCredential && userCredential.user) {
          const user = userCredential.user;
          const userEmail = user.email;
          user.getIdToken().then(token => {
            localStorage.setItem('token', token);
            console.log("Has iniciat sessio!")
            console.log("Correu: " + userEmail)
          });
        } else {
          // Autenticación fallida
          console.log('Error autenticació');
        }
      })
      .catch(error => {
        // Autenticación fallida
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Codi d'error: " + errorCode)
        console.log("Missatge d'error: " + errorMessage)
      });
  }
}
