let NC=0;
let CC=0;
let TOT=0;

NC=+prompt("ingrese el número de la cita");

if(NC<=3){
    CC=200;
    TOT=NC*200;
}else if(NC<=5){
    CC=150;
    TOT=3*200+(NC-3)*150;
}else if(NC<=8){
    CC=100;
    TOT=3*200+2*150+(NC-5)*100;
}else{
    CC=50;
    TOT=3*200+2*150+3*100+(NC-8)*50;
}

console.log(`El costo de la cita de hoy sería: ${CC} soles`);
console.log(`El costo total sería: ${TOT} soles`);
