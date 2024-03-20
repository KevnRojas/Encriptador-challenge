const botonEncriptar =document.querySelector(".btn-Encriptar");
const cajaTexto = document.querySelector("#textoEncriptar");
const cajaMensaje = document.querySelector("#contenedorResultado");
const alerta = document.querySelector(".avisoAlerta");
const munieco = document.querySelector(".imagen-lupa");
const titulo = document.querySelector(".titulo-encriptador");
const p = document.querySelector(".parrafo");
const copiar = document.querySelector(".btn-copiar");
const matrizCode = [

    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],

];

botonEncriptar.addEventListener("click",e =>{
e.preventDefault();
const texto = cajaTexto.value;
const txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "" );

if(texto !== txt){
    alerta.style.background = "#e9e50e";
    alerta.style.color = "#000000";
    alerta.style.fontweight = "#800";
    alerta.textContent ="No debe tener acentos y caracteres especiales";

    setTimeout(() => {
        alerta.removeAttribute("style");
    },1000);

} 
else if(texto !==texto.toLowerCase()){
    alerta.style.background = "#df0b0b";
    alerta.style.color = "#FFFF";
    alerta.style.fontweight = "#800";
    alerta.textContent ="No se acepta texto en mayuscula";

    setTimeout(() => {
        alerta.removeAttribute("style");
    },1000);

    
}

    munieco.remove();
    titulo.remove();
    p.remove();
    copiar.style.visibility = "inherit";
})

        /* ENCRIPTAR */

function btnEncriptar(){
    const texto = encriptar(cajaTexto.value);
    contenedorResultado.value = texto;
}

function encriptar(fraseEncriptada){
    for(i=0 ; i<matrizCode.length ; i++){
        if(fraseEncriptada.includes(matrizCode[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matrizCode[i][0],
                matrizCode[i][1],
            )
        }
    }
      return fraseEncriptada;  
}


         /* DESENCRIPTAR */

function btnDesencriptar(){
    const texto1 = desencriptar(cajaMensaje.value);
    contenedorResultado.value = texto1;
}

function desencriptar(fraseDesencriptada){
    for(i=0 ; i<matrizCode.length ; i++){
        if(fraseDesencriptada.includes(matrizCode[i][1])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                matrizCode [i][1],
                matrizCode [i][0],
            )
        }

    }
        return fraseDesencriptada;
}


copiar.addEventListener("click",e =>{
    e.preventDefault();
    let botoncopiar = cajaMensaje;
    botoncopiar.select();
    document.execCommand("copy");
});