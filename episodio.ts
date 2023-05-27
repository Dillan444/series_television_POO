export class Episodio {
  nombre: String
  resumen: string
  duracion: number

  constructor(nombre: string, resumen: string, duracion: number) {
    this.nombre = nombre
    this.resumen = resumen
    this.duracion = duracion
  }
}