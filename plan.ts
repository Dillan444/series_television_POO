export class Plan {
  precio: number
  tipo: string

  constructor(tipo: string, precio: number) {
    this.precio = precio
    this.tipo = tipo
  }
}