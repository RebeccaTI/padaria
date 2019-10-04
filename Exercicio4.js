// broas = 1,50, paozinho = 0.12 .grana final guardar na poupança 10%.
var broas = prompt("quantas broas vendidas");
var paezinhos = prompt("quantos paezinhos vendidos");
var broas_vendidas = parseInt(broas);
var paezinhos_vendidos = parseInt(paezinhos);
var poupanca = 0;

var lucro = 0;

lucro = 0.12 * paezinhos_vendidos + broas_vendidas * 1.50;
poupanca = lucro * 0.10 + poupanca;

console.log(poupanca);

