import { Actor } from "./actor.js"
import { Categoria } from "./categoria.js"
import { Episodio } from "./episodio.js"
import { Persona } from "./persona.js"
import { Plataforma } from "./plataforma.js"

type elenco = {
  actores: string[],
  directores: string[]
}

export class Serie {
  imagen: String
  nombre: string

  episodios: Episodio[] = []
  elenco: elenco = {
    "actores": [],
    "directores": []
  }
  mediosEmicion: Plataforma[] = []
  categorias: Categoria[] = []

  constructor(imagen: string, nombre: string) {
    this.imagen = imagen
    this.nombre = nombre
  }


  get_name(){
    return this.nombre
  }
  // 2. Mostrar el detalle de una serie en particular
  get_serieDetails(){
    const details: object = {
      "imagen": this.imagen,
      "nombre": this.nombre,
      "episodios": this.episodios,
      "categorias": this.get_category(),
      "actores": this.elenco.actores,
      "directores": this.elenco.directores
    }

    return details
  }
  // 4. Mostrar el listado de directores y actores de una serie
  get_actorsAndDirectorsList(){
    return this.elenco
  }

  get_category(){
    return this.categorias.map(category => category.get_name())
  }

  // 12. Agregar una categoría a una serie 
  add_category(categoria: Categoria){
    this.categorias.push(categoria)
  }
  // 13. Agregar un actor a una serie
  add_actor(nombre: string){
    this.elenco["actores"].push(nombre)
  }
  // 14. Agregar un director a una serie
  add_director(nombre: string){
    this.elenco["directores"].push(nombre)
  }

  add_episodio(episodio: Episodio){
    this.episodios.push(episodio)
  }
}