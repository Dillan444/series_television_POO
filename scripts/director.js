import { Persona } from "./persona.js";
export class Director extends Persona {
    constructor(nombre, fotografia, descripcion) {
        super(nombre, fotografia, descripcion);
    }
    get_details() {
        return this;
    }
}
