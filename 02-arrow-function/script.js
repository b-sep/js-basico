// forma tradicional
// function upperName(name) {
//   return name.toUpperCase();
// }

// salvando em uma const
// const upperName = function(name) {
//   return name.toUpperCase();
// }

// arrow function
// const upperName = (name) => {
//   return name.toUpperCase();
// }

// arrow functions com um retorno em uma linha NÃO precisam de chaves/return.

const upperName = (name) => name.toUpperCase();
const countLetters = (word) => word.length;

console.log(countLetters('beto'));
console.log(upperName('beto'));

// a principal diferença entre uma arrow function e uma função declarada de forma tradicional é que a arrow não cria um 'contexto' próprio (não tem this)

// class Menu {
//   constructor(menu) {
//     this.menuElement = document.querySelector(menu);
//     this.activeClass = 'active';
//   }
//   addActiveEvent() {
//     this.menuElement.addEventListener('click', function(event) { // essa função de callback está criando um novo contexto (this), por isso a linha 34 não funciona!!
//       console.log(this) // aponta para a função da linha 31
//       event.target.classList.add(this.activeClass);
//     });
//   }
// }

// const menu = new Menu('.principal')
// menu.addActiveEvent();

// usando arrow function o código funcionaria pois arrow function não cria contexto próprio

class Menu2 {
  constructor(menu) {
    this.menuElement = document.querySelector(menu);
    this.activeClass = 'active';
  }
  addActiveEvent() {
    this.menuElement.addEventListener('click', (event) => {
      console.log(this) // aponta para a classe em si
      event.target.classList.add(this.activeClass);
    });
  }
}

const menu2 = new Menu2(['.principal'])
menu2.addActiveEvent();
