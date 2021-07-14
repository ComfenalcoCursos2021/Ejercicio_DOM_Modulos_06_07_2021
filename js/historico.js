export let historial = (()=>{
    let lista = [];
    let Historial = [];
    return (arg)=>{
        // let guardarHistorico = function({...par}) {
        //     Historial.push(lista.join(""));
        //     Historial.push(par.boton.innerText);
        //     (par.igual) ? lista = [] : lista=[], Historial=[]; 
        //     return Historial;
        // }
        // console.log(lista)
        // return (Number.isInteger(arg))?( 
        //         lista.push(arg),
        //         lista
        //     ):(arg.simbolos.test(arg.boton.innerText))?
        //         guardarHistorico(arg)
        //     :(arg.igual)?( 
        //         lista.push(arg),
        //         guardarHistorico(arg)
        //     ):undefined;

        let data;
        if(Number.isInteger(arg)){
            lista.push(arg);
            data = lista;
        }else if(arg.simbolos.test(arg.boton.innerText)){
            if(lista.length!=0){
                Historial.push(lista.join(""));
                Historial.push(arg.boton.innerText);
            }
            data = Historial;
            lista = [];
        }else if(arg.igual){
            if(lista.length!=0){
                Historial.push(lista.join(""));
                Historial.push(arg.boton.innerText);
            }
            data = Historial;
            lista = [];
            Historial = [];
        }
        return data;
    }
})();