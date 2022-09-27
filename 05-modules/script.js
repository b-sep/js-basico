// servem para quebrarmos o código em diferentes arquivos para facilitar organização e reutilização de código, para funcionar em JS puro, ao importar o script no html o type='module' deverá ser passado
import { areaQuadrado, perimetroQuadrado } from './quadrado.js'; // se estiver importando mais de uma função, o nome deve ser exato.
import aleatorio from './numeroAleatorio.js' // imports com default não precisam ter o mesmo nome da função original
import circulo from './circulo.js'

console.log(areaQuadrado(4));
console.log(perimetroQuadrado(4));

console.log(aleatorio());
console.log(circulo.area(4));
console.log(circulo.circunferencia(44));
console.log(circulo.aleatorio());

