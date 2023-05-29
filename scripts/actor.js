"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actor = void 0;
const persona_js_1 = require("./persona.js");
class Actor extends persona_js_1.Persona {
    constructor(nombre, fotografia, descripcion) {
        super(nombre, fotografia, descripcion);
    }
    get_details() {
        return this;
    }
}
exports.Actor = Actor;
