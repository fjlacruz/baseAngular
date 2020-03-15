import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { map } from "rxjs/operators";

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

  login2(user_to_login, gethash = null): Observable<Object> {
    if (gethash != null) {
      user_to_login.gethash = gethash;
    }
    let json = JSON.stringify(user_to_login);
    let params = json;

    let headers = new HttpHeaders().set("Content-Type", "application/json");

    return this._http
      .post("http://localhost:3700/api/login", params, { headers: headers })
      .pipe(map((res: any) => res.json()));
  }
}
