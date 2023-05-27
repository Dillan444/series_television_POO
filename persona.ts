import { Serie } from "./serie"

export abstract class Persona {
  nombre: string
  fotografia: string
  descripcion: string
  series: Serie[] = []

  constructor(nombre: string, fotografia: string, descripcion: string) {
    this.nombre = nombre
    this.fotografia = fotografia
    this.descripcion = descripcion
  }
}