
export function Numeros({...arg}) {
    let data = {
        texto: parseInt(arg.boton.innerText),
        metodo: arg.metodo,
    }
    if(!isNaN(data.texto)){
        let resultado = {
            numero1: data.texto,
            resultado: arg.resultado,
            array: arg.historial
        };
        return data.metodo(resultado);
    }
}

export default Numeros;