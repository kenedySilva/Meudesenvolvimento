//Definição de objeto é chave valor
const martelo = {}
martelo.nome = "Martelo de 10 Toneladas"
martelo.preco = 999.90

const btorneita = {}
btorneita.nome = 'Btorneira de aço'
btorneita.preco = 5000.50

const paFerro = {
    nome: 'Pá de Ferro',
    preco: 500.90
} 

console.log("Segue os Itens da loja")
console.log(martelo)
console.log(btorneita)
console.log(paFerro)
//Como Criar um Objeto em Js, o que eu percebi, foi quando abro o conchetes {} nao consigo chamar 
//a constante para imprimir eu manipulala, acredito que é devido não ser uma classe public