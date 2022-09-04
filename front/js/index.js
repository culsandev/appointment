const fecha = new Date();
const mesActual = fecha.getMonth();
const month = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];


window.onload=function(){
    var mesCaledario = document.getElementById("mes").innerText=month[mesActual];
    console.log(mesCaledario)
    var izq = document.getElementById("izq");
    var der = document.getElementById("der");
    var izqM = izq.innerText;
    var derM = der.innerText;
 
}

function moverDer(){
    console.log("AAAAAAAAAAAA");
}

