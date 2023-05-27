import { Plan } from "./plan"
import { Serie } from "./serie"

export class Plataforma {
  nombre: string
  dominio: string
  
  planes: Plan[] = []
  series: Serie[] = []

  constructor(nombre: string, dominio: string) {
    this.nombre = nombre
    this.dominio = dominio
  }
}