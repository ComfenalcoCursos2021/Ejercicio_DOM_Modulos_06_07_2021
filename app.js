import Numeros from './js/numeros.js';
import Mostrar from './js/resultados.js';
import * as array from './js/historico.js'
import Operacion from './js/operaciones.js';

addEventListener("DOMContentLoaded", function (e) {
    addEventListener("click", function(e) {

        let config = {
            boton: e.target,
            metodo: Mostrar,
            simbolos: /^[\*\-\+\/\\]/,
            operaciones: Operacion,
            resultado: document.body.children.myResultados,
            historial: array.historial
        } 
        config.resultado.append(Numeros(config));
    })
})