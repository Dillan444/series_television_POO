export abstract class Persona {
  nombre: string
  fotografia: string
  descripcion: string
  series: string[] = []

  constructor(nombre: string, fotografia: string, descripcion: string) {
    this.nombre = nombre
    this.fotografia = fotografia
    this.descripcion = descripcion
  }

  // 5. Mostrar el detalle de un director y de un actor
  abstract get_details(): any

  add_serie(nombreSerie: string){
    this.series.push(nombreSerie)
  }

  get_name(){
    return this.nombre
  }
}