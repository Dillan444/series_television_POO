"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
class Serie {
    constructor(imagen, nombre) {
        this.episodios = [];
        this.elenco = {
            "actores": [],
            "directores": []
        };
        this.mediosEmicion = [];
        this.categorias = [];
        this.imagen = imagen;
        this.nombre = nombre;
    }
    get_name() {
        return this.nombre;
    }
    // 2. Mostrar el detalle de una serie en particular
    get_serieDetails() {
        const details = {
            "imagen": this.imagen,
            "nombre": this.nombre,
            "episodios": this.episodios,
            "categorias": this.get_category(),
            "actores": this.elenco.actores,
            "directores": this.elenco.directores
        };
        return details;
    }
    // 4. Mostrar el listado de directores y actores de una serie
    get_actorsAndDirectorsList() {
        return this.elenco;
    }
    get_category() {
        return this.categorias.map(category => category.get_name());
    }
    // 12. Agregar una categoría a una serie 
    add_category(categoria) {
        this.categorias.push(categoria);
    }
    // 13. Agregar un actor a una serie
    add_actor(nombre) {
        this.elenco["actores"].push(nombre);
    }
    // 14. Agregar un director a una serie
    add_director(nombre) {
        this.elenco["directores"].push(nombre);
    }
    add_episodio(episodio) {
        this.episodios.push(episodio);
    }
}
exports.Serie = Serie;
