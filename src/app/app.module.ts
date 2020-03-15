import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UsuariosComponent } from "./usuarios/usuarios.component";
import { EditarUsuarioComponent } from "./editar-usuario/editar-usuario.component";
import { LoginComponent } from "./login/login.component";
import { Login2Component } from './login2/login2.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    EditarUsuarioComponent,
    LoginComponent,
    Login2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
