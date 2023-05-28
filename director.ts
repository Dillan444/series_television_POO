import { Persona } from "./persona.js";

export class Director extends Persona{

  constructor(nombre: string, fotografia: string, descripcion: string) {
    super(nombre, fotografia, descripcion)
  }

  get_details() {
    return this
  }
}