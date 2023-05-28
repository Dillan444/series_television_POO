import { Actor } from "./actor.js";
import { Categoria } from "./categoria.js";
import { Director } from "./director.js";
import { Plataforma } from "./plataforma.js";
import { Serie } from "./serie.js";

export class SeriesDeTelevision {
  series: Serie[] = []
  plataformas: Plataforma[] = []
  categorias: Categoria[] = []
  actores: Actor[] = []
  directores: Director[] = []

  // 1. Mostrar el listado de todas las serie
  show_seriesList(){
    let series: string[] = []
    this.series.forEach(serie => {
      series.push(serie.get_name())
    });

    console.log(series)
  }

  // 2. Mostrar el detalle de una serie en particular
  show_serieDetails(nombreSerie: string){
    const serie = this.filterSerie(nombreSerie)
    if(!serie){
      console.log(`404 La serie ${nombreSerie} no fue encontrada`)
      return 
    }
    console.log(serie.get_serieDetails())
  }

  // 3. Mostrar el listado de categorías
  show_categories(){
    const categorias = this.categorias.map(category => category.get_name())
    console.log(categorias)
  }

  // 4. Mostrar el listado de directores y actores de una serie
  show_actorsAndDirectorsListOfSerie(nombreSerie: string){
    const serie = this.filterSerie(nombreSerie)
    if(!serie){
      console.log(`404 La serie ${nombreSerie} no fue encontrada`)
      return 
    }
    console.log(serie.get_actorsAndDirectorsList())
  }

  // 5. Mostrar el detalle de un director y de un actor
  show_actorDetails(actorName: string){
    const actor = this.actores.filter(actr => actr.get_name() === actorName)[0]
    if(!actor){
      console.log(`Error 404: El actor ${actorName} no fue encontrado`)
      return  
    }
    console.log(actor.get_details())
  }

  show_directorDetails(directorName: string){
    const director = this.directores.filter(actr => actr.get_name() === directorName)[0]
    if(!director){
      console.log(`Error 404: El director ${directorName} no fue encontrado`)
      return  
    }
    console.log(director.get_details())
  }

  // 6. Mostrar el listado de las plataformas
  show_plataformas(){
    console.log(this.plataformas.map(plataforma => plataforma.get_name()))
  }

  // 7. Mostrar detalle de una plataforma
  show_PlataformaDetails(nombrePlataforma: string){
    const plataforma = this.plataformas.filter(plataformaFilter => plataformaFilter.get_name() === nombrePlataforma)[0]
    if(!plataforma){
      console.log(`404 ${nombrePlataforma} Not found`)
      return
    }

    console.log(plataforma.get_details())
  }

  // 8. Crear una nueva serie
  create_serie(imagen: string, nombre: string){
    const newSerie = new Serie(imagen, nombre)
    this.series.push(newSerie)
    return newSerie
  }

  // 9. Crear una nueva categoría
  create_category(nombre: string){
    const newCategory = new Categoria(nombre)
    this.categorias.push(newCategory)
  }

  // 10. Crear un nuevo actor
  create_actor(nombre: string, foto: string, descripcion: string){
    const newActor = new Actor(nombre, foto, descripcion)
    this.actores.push(newActor)
    return newActor
  }

  // 11. Crear un nuevo director
  create_director(nombre: string, foto: string, descripcion: string){
    const newDirector = new Director(nombre, foto, descripcion)
    this.directores.push(newDirector)
    return newDirector
  }

  // 12. Agregar una categoría a una serie
  add_categoryToSerie(categoria: string, nombreSerie: string){
    const serie = this.filterSerie(nombreSerie)
    const categoriaToSet = this.categorias.filter(category => category.get_name() === categoria)
    if(!serie){
      console.log(`Error 404: La serie ${nombreSerie} no fue encontrara`)
      return
    }
    if (categoriaToSet.length != 1) {
      console.log(`Error 404: La categoria ${categoria} no fue encontrada. Intenta crearla primero`)
      return
    }
    serie.add_category(categoriaToSet[0])
  }

  // 13. Agregar un actor a una serie
  add_actorToSerie(actorName: string, serieName: string){
    const serie = this.filterSerie(serieName)
    const actor = this.actores.filter(actorFilter => actorFilter.get_name() === actorName)[0]

    if(!serie){
      console.log(`404 ${serieName} Not found`)
      return
    }
    if(!actor){
      console.log(`404 ${actorName} Not found`)
      return
    }

    serie.add_actor(actor.get_name())
  }

  // 14. Agregar un director a una serie
  add_directorToSerie(directorName: string, serieName: string){
    const serie = this.filterSerie(serieName)
    const director = this.directores.filter(direc => direc.get_name() === directorName)[0]

    if(!serie){
      console.log(`404 ${serieName} Not found`)
      return
    }
    if(!director){
      console.log(`404 ${directorName} Not found`)
      return
    }

    serie.add_director(director.get_name())
  }

  add_serieToActor(serieName: string, actorName: string){
    const serie = this.filterSerie(serieName)
    const actor = this.actores.filter(actorFilter => actorFilter.get_name() === actorName)[0]

    if(!serie){
      console.log(`404 ${serieName} Not found`)
      return
    }
    if(!actor){
      console.log(`404 ${actorName} Not found`)
      return
    }

    actor.add_serie(serie.get_name())
  }

  add_serieToDirector(serieName: string, directorName: string){
    const serie = this.filterSerie(serieName)
    const director = this.directores.filter(directorFilter => directorFilter.get_name() === directorName)[0]

    if(!serie){
      console.log(`404 ${serieName} Not found`)
      return
    }
    if(!director){
      console.log(`404 ${directorName} Not found`)
      return
    }

    director.add_serie(serie.get_name())
  }

  add_Plataforma(plataforma: Plataforma){
    this.plataformas.push(plataforma)
  }

  filterSerie(nombreSerie: string){
    const serie = this.series.filter(seriefilter => seriefilter.get_name() === nombreSerie)
    return serie[0]
  }
}