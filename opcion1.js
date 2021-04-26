let L=0;
let PG=0;
let TG=0;
let GA=0;

L=+prompt("ingrese cantidad de litros que produce");
PG=+prompt("ingrese precio por galón");

TG=L/3.785;
GA=TG*PG;

console.log(`la ganancia del día será: ${GA} soles`);

