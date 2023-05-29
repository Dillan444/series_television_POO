export class Persona {
    constructor(nombre, fotografia, descripcion) {
        this.series = [];
        this.nombre = nombre;
        this.fotografia = fotografia;
        this.descripcion = descripcion;
    }
    add_serie(nombreSerie) {
        this.series.push(nombreSerie);
    }
    get_name() {
        return this.nombre;
    }
}
