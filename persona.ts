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

  // 5. Mostrar el detalle de un director y de un actor
  abstract get_details(): any

  add_serie(serie: Serie){
    this.series.push(serie)
  }

  get_name(){
    return this.nombre
  }
}