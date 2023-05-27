import { Persona } from "./persona";

export class Actor extends Persona{

  constructor(nombre: string, fotografia: string, descripcion: string) {
    super(nombre, fotografia, descripcion)
  }
}