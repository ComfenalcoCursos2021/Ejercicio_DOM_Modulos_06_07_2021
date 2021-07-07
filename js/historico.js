export let historial = (()=>{
    let lista = [];
    return (arg)=>{
        lista.push(arg);
        return lista;
    }
})();