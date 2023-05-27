export class Categoria {
  categorias: any = {}

  constructor(categoria: string){
    this.categorias[categoria] = true
  }
}