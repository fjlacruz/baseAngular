export class Usuario {
  constructor(
    public id_usuario: number,
    public nombres: string,
    public apellidos: string,
    public usuario: string,
    public rut: string,
    public clave: string,
    public email: string,
    public rol: number,
    public estatus: number,
    public telefono: string,
    public token: string,
    public fecha_registro: string
  ) {}
}
