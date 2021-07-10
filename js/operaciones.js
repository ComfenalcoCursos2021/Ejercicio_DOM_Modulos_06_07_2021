function Operacion({...arg}) {
    arg.numero1 = Object.assign({}, arg.historial(arg));
    console.log(arg.numero1);
    return arg.metodo(arg);
    
}

export default Operacion;
