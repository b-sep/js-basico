// map, filter e reduce retornam uma NOVA array

const precos = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas a pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados'
];

// filter retorna um novo array com os elementos que passam na condicional
const precosFiltro = precos.filter((preco) => {
  return preco.includes('R$')
})

console.log(precosFiltro);


// map retorna um novo array com os elementos modificados
const precosNumeros = precosFiltro.map((preco) => {
  return Number(preco.replace('R$ ', ''));
})

console.log(precosNumeros);


// reduce como o nome diz, reduz um array a um único objeto (array, hash, string..)
const total = precosNumeros.reduce((acumulador, numero) => {
  return acumulador + numero
})

console.log(total);
