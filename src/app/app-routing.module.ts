import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
//import { ModuleWithProviders } from "@angular/core";

//======Importando los componentes a visualizar en las rutas ======//
import { UsuariosComponent } from "./usuarios/usuarios.component";
import { EditarUsuarioComponent } from "./editar-usuario/editar-usuario.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "lista-usuarios", component: UsuariosComponent },
  { path: "editar-usuario/:id_usuario", component: EditarUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
