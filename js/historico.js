export let historial = (()=>{
    let lista = [];
    let Historial = [];
    return (arg)=>{
        let data;
        if(Number.isInteger(arg)){
            lista.push(arg);
            data = lista;
        }else if(arg.simbolos.test(arg.boton.innerText)){
            Historial.push(lista.join(""));
            Historial.push(arg.boton.innerText);
            lista = [];
            data = Historial;
        }
        return data;
    }
})();