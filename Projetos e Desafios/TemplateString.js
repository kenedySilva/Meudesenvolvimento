const nome = 'Rebeca'
const concatenação = 'Olá '+ nome +"!";
const template = `
Olá
${nome}!`//Metodo para fazer texto com quebra de linha e é possivel abrir momentos de logica com '${}'
console.log(concatenação);
console.log(template);
console.log(`1 + 1 = ${50 + 50}`)

const up = upTexto => upTexto.toUpperCase();//Função para deixar o texto em maiusculo
console.log(`Ei... ${up('cuidado')}!`)

console.log('Ei...', "CUIDADO".toLowerCase());//Função para deixar o texto em minusculo