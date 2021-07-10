export function Mostrar({...arg}) {

    if(Number.isInteger(arg.numero1)){
        let myClassP = {
            0: "fw-bold",
            1: "text-white",
            2: "fs-1",
            3: "text-end"
        };
        let myClassDiv = {
            0: "pb-2",
            1: "pe-3"
        }
        let framen = new DocumentFragment();
        for (let i = 0; i < 2; i++) {
            let p = document.createElement("P");
            let div = document.createElement("DIV");
            div.appendChild(p);
            if(i==0){
                delete myClassDiv[0];
                myClassP[2] = "fs-3";
                myClassP[4] = "mb-n3"; 
                p.classList.add(...Object.values(myClassP));
                div.classList.add(...Object.values(myClassDiv));
            }else{
                myClassDiv[0] = "pb-2";
                myClassP[2] = "fs-1";
                delete myClassP[4]; 
                p.classList.add(...Object.values(myClassP));
                div.classList.add(...Object.values(myClassDiv));
            }
            framen.appendChild(div);
        }
        framen.children[0].children[0].appendChild(document.createTextNode(arg.resultado.children[0].children[0].innerText));
        framen.children[1].children[0].appendChild(document.createTextNode(arg.array(arg.numero1).join("")));
        arg.resultado.innerHTML = "";
        return framen;
    }else if(typeof arg.numero1 == "object" && arg.igual){
        arg.numero1 = Object.values(arg.numero1);
        arg.resultado.children[0].children[0].innerText = "0";
        arg.resultado.children[1].children[0].innerText = resultadosValidaos({numero1: arg.numero1});
        return ''; 
    }else if(typeof arg.numero1 == "object"){
        arg.numero1 = Object.values(arg.numero1);       
        arg.resultado.children[0].children[0].innerText = arg.numero1.join(" ");
        arg.resultado.children[1].children[0].innerText = resultadosValidaos({numero1: arg.numero1});
        return ''; 
    }

    function resultadosValidaos({...arg}) {
        let resultado = 0;
        for (let i = 1; i < arg.numero1.length; ) {
            if(i == (arg.numero1.length-1)){
                break;
            }else if(i==1){
                resultado = eval(arg.numero1.slice(0,3).join(" "));
            }else{
                resultado = eval(resultado+" "+arg.numero1.slice(i,(i+2)).join(" "));
            }
            i+=2;
        }
        return resultado;
    }
}
export default Mostrar;


