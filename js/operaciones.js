function Operacion({...arg}) {
    arg.numero1 = Object.assign({}, arg.historial(arg));
    return arg.metodo(arg);
    
}

export default Operacion;
