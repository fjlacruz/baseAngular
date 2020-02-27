import { Component, OnInit } from "@angular/core";
import { Usuario } from "../models/usuario";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { UsuariosService } from "../services/usuarios.service";

@Component({
  selector: "app-usuarios",
  templateUrl: "./usuarios.component.html",
  styleUrls: ["./usuarios.component.css"],
  providers: [UsuariosService]
})
export class UsuariosComponent implements OnInit {
  public usuarios: any;
  public titulo: string;
  public texto: string;
  public usuario: string;
  public id_usuario: any;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _usuarioservice: UsuariosService
  ) {
    this.titulo = "Listado de Usuarios";
  }

  ngOnInit(): void {
    // this._route.params.subscribe((params: Params) => {
    //   this.usuario = params.usuario;
    //   console.log(this.usuario);
    // });
    this.usuarios = false;
    this._usuarioservice.getUsers().subscribe(
      result => {
        console.log(result);
        this.usuarios = result.response;
      },
      error => {
        console.log(error);
      }
    );
  }

  editUser(id_usuario: number) {
    this._router.navigate(["/"]);
    alert(this.id_usuario);
  }
}
