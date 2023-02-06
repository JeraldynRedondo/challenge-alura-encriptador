var Salida=document.getElementById("resultado");
var btncopiar= document.getElementById("copy");

btncopiar.style.display = 'none';

function Validar(mensaje){
    let validacion = /[A-Z0-9]|[#|%|&|(|)|!|¡]/.test(mensaje);
    let control=0;
    if (validacion){
        console.log("Ingreso un caracter no valido");
        control=1;
    }
    return control;
}

  function encriptar(){
    let inMensaje= document.getElementById("mensaje").value;
    let  validarMensaje= Validar(inMensaje);
    let mensajeError = "El mensaje no pudo ser procesado,por favor revisa que no hayas incluido ninguna letra mayúscula, acento y/o caracteres especiales.";
    let mensajevacio="No se encontró ningún mensaje, por favor intentelo de nuevo";
    let outMensaje = inMensaje;

    if(inMensaje=="" || inMensaje=="  "){
        Salida.value = mensajevacio;
        btncopiar.style.display = 'none';
    } 
    else if(validarMensaje==1){
        Salida.style.backgroundImage= 'none';
        Salida.value = mensajeError;
        btncopiar.style.display = 'none';
    }
    else{
        Salida.style.backgroundImage= 'none';
        btncopiar.style.display = 'block';
        outMensaje = outMensaje.replaceAll("e","enter");
        outMensaje = outMensaje.replaceAll("i","imes");
        outMensaje = outMensaje.replaceAll("a","ai");
        outMensaje=  outMensaje.replaceAll("o","ober");
        outMensaje=  outMensaje.replaceAll("u","ufat");

        console.log(outMensaje);
        Salida.value = outMensaje;
    }

}
function Desencriptar(){

    
    let inMensaje= document.getElementById("mensaje").value;
    let  validarMensaje= Validar(inMensaje);
    let mensajeError = "El mensaje no pudo ser procesado,por favor revisa que no hayas incluido ninguna letra mayúscula, acento y/o caracteres especiales.";
    let outMensaje = inMensaje;

    if(inMensaje=="" || inMensaje=="  "){
        Salida.value = mensajevacio;
        btncopiar.style.display = 'none';
    } 
    else if(validarMensaje==1){
        Salida.style.backgroundImage= 'none';
        Salida.value = mensajeError;
        btncopiar.style.display = 'none';
    }
    else{
        Salida.style.backgroundImage= 'none';
        btncopiar.style.display = 'block';
        outMensaje = outMensaje.replaceAll("enter","e");
        outMensaje = outMensaje.replaceAll("imes","i",);
        outMensaje = outMensaje.replaceAll("ai","a");
        outMensaje=  outMensaje.replaceAll("ober","o");
        outMensaje=  outMensaje.replaceAll("ufat","u");

    console.log(outMensaje);
    Salida.value = outMensaje;
    }
}


function copiar(){
    // Select the text field
    Salida.select();
    Salida.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(Salida.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Texto copiado con éxito";
    document.getElementById("mensaje").value="";
}

function texto(){
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copiar al portapapeles";
}