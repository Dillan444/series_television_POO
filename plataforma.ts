import { Plan } from "./plan.js"
import { Serie } from "./serie.js"

export class Plataforma {
  nombre: string
  dominio: string

  planes: Plan[] = []
  series: Serie[] = []


  constructor(nombre: string, dominio: string) {
    this.nombre = nombre
    this.dominio = dominio
  }

  
  show_SeriesList(){
    this.series.forEach(serie => {
      console.log(serie.get_name())
    });
  }

  add_serie(serie: Serie){
    this.series.push(serie)
  }

  get_details(){
    return this
  }

  get_name(){
    return this.nombre
  }
}