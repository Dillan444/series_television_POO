export class Categoria {
  categoria: string

  constructor(categoria: string){
    this.categoria = categoria
  }

  get_name(){
    return this.categoria
  }
}