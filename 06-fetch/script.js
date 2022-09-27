// Forma de enviar requisições assíncronas para o servidor
// retorna uma promise!
fetch('https://pokeapi.co/api/v2/pokemon/dragonite')
  .then(response => response.json())
  .then(jsonResponse => {
    document.querySelector('#app').innerHTML = jsonResponse.species.name
  })
