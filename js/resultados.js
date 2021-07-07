export function Mostrar({...arg}) {
    arg.resultado.innerHTML = "";
    if(Number.isInteger(arg.numero1)){
        let myClass = [
            "fw-bold",
            "text-white",
            "fs-1",
            "text-end"
        ]
        let p = document.createElement("P");
        // let texto = arg.array(arg.numero1).join("");
        p.appendChild(document.createTextNode(arg.array(arg.numero1).join("")));
        p.classList.add(...myClass);
        console.log(arg.array(arg.numero1));
        return p;
    }
}
export default Mostrar;