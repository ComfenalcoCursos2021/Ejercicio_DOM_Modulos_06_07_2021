export function Mostrar({...arg}) {
   
    // console.log(arg);
    if(Number.isInteger(arg.numero1)){
        arg.resultado.innerHTML = "";
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
        framen.children[0].children[0].appendChild(document.createTextNode("0"));
        framen.children[1].children[0].appendChild(document.createTextNode(arg.array(arg.numero1).join("")));
        // console.log(arg.array(arg.numero1));
        return framen;
    }else if(Array.isArray(arg.numero1)){
        let data = arg.numero1.join("");
        arg.resultado.children[0].children[0].innerText = arg.numero1.join(" ");
        arg.resultado.children[1].children[0].innerText = eval(data.substring(0, data.length - 1));
        return ''; 
    }
}
export default Mostrar;