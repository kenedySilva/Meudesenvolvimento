let isAtivo = false;
console.log(isAtivo);

isAtivo = true
console.log(isAtivo)

isAtivo = 1;
console.log(!!isAtivo)// o simbolo '!' siginifica "não", se juntarmos dois deles '!!' teremos um teste de verdadeiro ou falso
//baseado na regra da matematica em que menos com menos é mais

console.log("Situações em que vai dar Verdadeiro");
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("Situações em que vai dar Falso");
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Finalizando");

console.log(!!('' || null || 0 ||" "));//a função "||" é a tag or, ela verifica qual é verdadeiro ou falso

let name = ''//logica para saber se o nome é deconhecido ou nao
console.log(name ||'Desconhecido');
