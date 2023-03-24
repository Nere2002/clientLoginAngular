import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireModule} from "@angular/fire/compat";
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { FormComponent } from './form/form.component';


const firebaseConfig = {
  apiKey: "AIzaSyCn-EgfMKUr8fnjPEHk6PEUXjZVtocc6Is",
  authDomain: "inici-sessio.firebaseapp.com",
  projectId: "inici-sessio",
  storageBucket: "inici-sessio.appspot.com",
  messagingSenderId: "192534858921",
  appId: "1:192534858921:web:e1a7b8bb67876a359f2db8"
};

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PreguntasComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
