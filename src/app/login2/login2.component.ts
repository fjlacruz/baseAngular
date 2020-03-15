import { Component, OnInit } from "@angular/core";
import { User } from "../models/usuarios2";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { UsuariosService } from "../services/usuarios.service";
import { FormsModule } from "@angular/forms";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-login2",
  templateUrl: "./login2.component.html",
  styleUrls: ["./login2.component.css"],
  providers: [UsuariosService]
})
export class Login2Component implements OnInit {
  public title = "Angular Base";
  public user: User;
  public identity;
  public token;
  public errorMessage;
  public respuesta;

  constructor(private _usuarioservice: UsuariosService) {
    this.user = new User("", "", "", "", "", "ROLE_USER", "");
  }

  public onSubmit() {
    // console.log(loginPayload);

    this._usuarioservice.login2(this.user).subscribe(
      response => {
        //let identity;

        console.log(response);

        // let identity = response[0].user;
        // this.identity = identity;
      },
      error => {
        // var errorMessage
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    //var data = this._usuarioservice.login();
  }
}
