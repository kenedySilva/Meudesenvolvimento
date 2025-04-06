const escola = "Cod3r";

console.log(escola.charAt(4));// O java permite que o programa rode sem efetuar alguns operações, por exemplo 
console.log(escola.charAt(5));// pedir um caracter de string nao da erro se nao existir

console.log(escola.charCodeAt(3)); // Para o retorno de codigo do caracter em html
console.log(escola.indexOf('')); // Para verificar se o valor ou caracter existe e determinar a posição na "string"

console.log(escola.substring(1));//Substring é jeito de o programa "imprimir" limitando os caracteres
console.log(escola.substring(0, 3));//sendo assim especificando aonde o testo vai cortar
console.log(escola.substring(0,indexOf("@")));//Posso limitar o inicio e o final em qual caracter 
console.log('Escola '.concat(escola.substring(0,5)) + "!")//Podemos concatenar com o .concat ou '+' 
console.log((3 + Math.PI)) //A operação sempre da preferencia ao + para uma operação String
console.log("3 ".concat(3)) //Pensando nisso pode haver horas que nao poderemos ultilizar um ou outro

console.log(''.replace(3, "e"));//Replace é uma função de trocar de caracter ele escolhe a selecionada e subistitui
console.log(''.replace(/\w/g, "e"));//Esta expressão /\w/g simboliza a area de regex no javascript

console.log('ana,maria,pedro'.split(","))//Split função responsalve em agrupara de forma linear gerando um arreio 