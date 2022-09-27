// sem desestruturar
// function handleMouseMove(event) {
//   const clientX = event.clientX
//   const clientY = event.clientY
//   console.log(clientX, clientY)
// }

document.documentElement.addEventListener('mousemove', handleMouseMove);

// desestruturando
// function handleMouseMove(event) {
//   const { clientX, clientY } = event // o nome deve ser igual ao da propriedade do objeto
//   console.log(clientX, clientY);
// }

// desestruturando de forma direta no argumento
function handleMouseMove({ clientX, clientY }) {
  console.log(clientX, clientY);
}

// desetruturando arrays
const frutas = ['banana', 'uva'];
const [fruta1, fruta2] = frutas;
console.log(fruta1, fruta2);
