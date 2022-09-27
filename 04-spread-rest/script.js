// rest: Significa que ao chamar essa função eu posso passar um argumento inicial (empresa) e depois passar vários outros argumentos que vão ser acumulados no parametro clients como um array
function showList(empresa, ...clients) {
  console.log(empresa);
  console.log(clients)
}

showList('jrsa', 'rebase', 'youse'); // > jrsa, ['rebase', 'youse']


// spread: Significa 'espalhar' os elementos de um array
const numeros = [1, 3, 10, 72, 7673, 4, 12];
console.log(Math.max(...numeros)); // o método max do objeto Math recebe apenas números como argumento, se passarmos o array direto teremos um erro, devemos 'espalhar' o array para atingirmos o resultado esperado

// outro exemplo de spread

const itens = document.querySelectorAll('li');
console.log(itens) // retorna uma Node list (parece array mas não é)

// existe o método forEach para node list
itens.forEach(item => {
  console.log(item)
})

// não existe o método map para node list, retorna um erro
// itens.map(item => {
//   console.log(item)
// })

// para transformar a node list em um array, podemos usar o spread
let arrayNodeList = [...itens]
arrayNodeList.map(item => {
  console.log(item)
})

// outro uso comum do spread é para clonar objetos
const carro = {
  cor: 'azul',
  portas: 4,
  ano: 2020
}

const cloneCarro = {...carro}

console.log(carro)
console.log(cloneCarro)

