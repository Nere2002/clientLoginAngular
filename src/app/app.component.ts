import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Benvingut a l'aplicació</h1>
    <h3>Que vols fer?</h3>
    <nav>
      <a routerLink="/register">Registrar-se</a> <br>
      <a routerLink="/login">Iniciar sessió</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'clientLoginAngular';
}
