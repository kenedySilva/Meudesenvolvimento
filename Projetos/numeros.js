const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871

console.log(Number.isInteger(avaliacao1));
console.log(Number.isInteger(avaliacao2));

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const mediaGeral = total / (peso1 +peso2);

console.log("A media final do aluno", mediaGeral.toFixed(2), mediaGeral.toString(2));
console.log(typeof mediaGeral)

//Cuidados com o Number

console.log(7 / 0);
console.log("10.2" / 2);
console.log("10,2" / 2);
console.log("show!" * 2);
console.log(0.1 + 0.7);
console.log((0.1 + 0.7).toFixed(2));