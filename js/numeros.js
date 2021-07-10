
export function Numeros({...arg}) {
    let data = {
        texto: parseInt(arg.boton.innerText),
        metodo: arg.metodo,
    }
    if((!isNaN(data.texto)) && arg.boton.type=="button"){
        let resultado = {
            numero1: data.texto,
            resultado: arg.resultado,
            array: arg.historial
        };
        return data.metodo(resultado);
    }else if(arg.simbolos.test(arg.boton.innerText) && arg.boton.nodeName!="P"){
        return arg.operaciones(arg);
    }else if(arg.boton.id == "igual"){
        arg.igual = true;
        return arg.operaciones(arg); 
    }else{
        return '';
    }
}

export default Numeros;