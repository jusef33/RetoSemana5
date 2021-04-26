let TI="";
let N=0;
let TP="";
let PA=0;
let CA=0.05;
let TO=0;
let TOT=0;

TI=prompt("ingrese el tipo de hamburguesa que desea (escribir la palabra exacta): sencilla,doble,triple");

N=+prompt("ingrese el número de hamburguesas que desea pedir");

TP=prompt("ingrese el tipo de pago (escribir la palabra exacta): contado, tarjeta");

switch(TI){
    case "sencilla":
        PA=20;
        break; 
    case "doble":
        PA=25;
        break;
    case "triple":
        PA=28;
        break;
}

if(TP==="contado"){
    TO=N*PA
    console.log(`El precio total es ${TO} soles`);
}else{
    TOT=N*PA*1.05
    console.log(`El precio total es ${TOT} soles`);
}

