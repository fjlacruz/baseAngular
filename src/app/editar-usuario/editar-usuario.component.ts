import { Component, OnInit } from "@angular/core";
import { Usuario } from "../models/usuario";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { UsuariosService } from "../services/usuarios.service";

@Component({
  selector: "app-editar-usuario",
  templateUrl: "./editar-usuario.component.html",
  styleUrls: ["./editar-usuario.component.css"],
  providers: [UsuariosService]
})
export class EditarUsuarioComponent implements OnInit {
  public usuario: Usuario;
  public id_usuario: any;
  public respuesta: any;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _usuarioservice: UsuariosService
  ) {}

  ngOnInit(): void {
    let token = window.localStorage.getItem("token");
    console.log(token);

    this._route.params.subscribe((params: Params) => {
      this.id_usuario = params.id_usuario;
      //console.log(this.id_usuario);
      this.getuserid(this.id_usuario);
    });
  }
  getuserid(id_usuario) {
    this._usuarioservice.getUsersId(id_usuario).subscribe(
      response => {
        this.usuario = response.response;
        //console.log(this.usuario);
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  onSubmit() {
    this._usuarioservice.edituser(this.id_usuario, this.usuario).subscribe(
      response => {
        this.respuesta = response;
        console.log(this.respuesta);
      },
      error => console.log(error)
    );
    //this.usuario = new Usuario();
    this.gotoList();
  }
  gotoList() {
    this._router.navigate(["/lista-usuarios"]);
  }
}
