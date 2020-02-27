import { Component, OnInit } from "@angular/core";
import { LoginUsuario } from "../models/loginUsuario";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { UsuariosService } from "../services/usuarios.service";
import { FormsModule } from "@angular/forms";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted: Boolean = false;
  public error: { code: number; message: string } = null;
  public respuesta: any;
  public res: any;
  public token: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _usuarioservice: UsuariosService
  ) {}

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      rut: [""],
      clave: [""]
    });
  }

  submitLogin(): void {
    const loginPayload = {
      rut: this.loginForm.controls.rut.value,
      clave: this.loginForm.controls.clave.value
    };
    this._usuarioservice.login(loginPayload).subscribe(data => {
      // debugger;
      this.respuesta = data["response"];
      this.token = data["token"];
      console.log(this.respuesta);
      if (this.respuesta === "success") {
        window.localStorage.setItem("token", this.token);
        this._router.navigate(["lista-usuarios"]);
      } else {
        console.log("usuario y/o clave incorrecta..!!");
        this._router.navigate([""]);
      }
    });
  }
  correctLogin() {
    //this.storageService.setCurrentSession(data);
    this._router.navigate(["/lista-usuarios"]);
  }
}
