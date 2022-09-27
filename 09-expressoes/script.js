const grupoA = 100;
const grupoB = 200;

// if statement sao blocos, nao expressoes
if(grupoA > grupoB) {
  console.log('grupo A maior')
}

// if ternario SAO expressoes
const grupoMaior = grupoA > grupoB ? 'A' : 'B'

console.log(`o grupo maior é o ${grupoMaior}`);
