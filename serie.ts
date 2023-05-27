import { Categoria } from "./categoria"
import { Episodio } from "./episodio"
import { Persona } from "./persona"
import { Plataforma } from "./plataforma"

export class Serie {
  imagen: String
  nombre: string

  episodios: Episodio[] = []
  elenco: Persona[] = []
  mediosEmicion: Plataforma[] = []
  categoria: Categoria[] = []

  constructor(imagen: string, nombre: string, episodio: Episodio) {
    this.imagen = imagen
    this.nombre = nombre
    this.episodios.push(episodio)
  }
}