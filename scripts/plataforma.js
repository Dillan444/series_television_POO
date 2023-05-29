"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plataforma = void 0;
class Plataforma {
    constructor(nombre, dominio) {
        this.planes = [];
        this.series = [];
        this.nombre = nombre;
        this.dominio = dominio;
    }
    show_SeriesList() {
        this.series.forEach(serie => {
            console.log(serie.get_name());
        });
    }
    add_serie(serie) {
        this.series.push(serie);
    }
    add_plan(plan) {
        this.planes.push(plan);
    }
    get_details() {
        return this;
    }
    get_name() {
        return this.nombre;
    }
}
exports.Plataforma = Plataforma;
