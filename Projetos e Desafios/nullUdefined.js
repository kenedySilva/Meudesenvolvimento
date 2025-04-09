let valor //vareavel nao devinida 
//
console.log(valor)//se voce tentar imprimir a vareavel existe porem nao foi iniciada entao retorna "undefined"
//é diferente de voce tentar imprimir uma vareavel que ainda nao foi declarada "console.log(valor2)" 
//que consequentemente quebra o programa.
valor = null //a vareavel foi iniciada porem esta vazia.
console.log(valor);

//console.log(valor.tostring()); CUIDADO se tentar acesar uma vareavel que estegam "Undefined" ou "Null",
//esta situação pode quebrar o programa

const produto = {};
console.log(produto.valor);
produto.nome = 'Bala Fine'
produto.valor = 6.90;
console.log(produto);//o objeto pode ser manipulado dinamica entre chave e valor afim de adicionar e agregar o produto

produto.valor = undefined //Evite usar a expressão undefined
console.log(!!produto.valor)
console.log(produto)
// Delete produto.valor seria a forma mais correta de zerar uma vareavel

produto.valor = null //se precisar iniciar uma vareavel sempre opte por null e nao underfined
console.log(!!produto.valor);
console.log(produto)

