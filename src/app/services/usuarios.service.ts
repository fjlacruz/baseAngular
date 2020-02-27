import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UsuariosService {
  public url: string;
  public id_usuario: any;
  constructor(public _http: HttpClient) {
    this.url = "http://localhost:8000/usuarios/";
  }
  getUsers(): Observable<any> {
    return this._http.get(this.url);
  }

  getUsersId(id_usuario): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");

    return this._http.get(this.url + id_usuario, {
      headers: headers
    });
  }
  edituser(id_usuario: number, value: any): Observable<Object> {
    return this._http.put(this.url + id_usuario, value);
  }
  login(loginPayload): Observable<Object> {
    return this._http.post("http://localhost:8000/login/", loginPayload);
  }
}
