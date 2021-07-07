import Numeros from './js/numeros.js';
import Mostrar from './js/resultados.js';
import * as array from './js/historico.js'

addEventListener("DOMContentLoaded", function (e) {
    addEventListener("click", function(e) {
        let config = {
            boton: e.target,
            metodo: Mostrar,
            resultado: document.body.children.myResultados,
            historial: array.historial
        }
        config.resultado.append(Numeros(config));
        // console.log(array.historial);
    })
})