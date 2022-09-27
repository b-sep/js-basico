// fetch retorna uma promise. É possível criarmos funçõeos assíncronas que irão esperar a promise ser resolvida antes de continuar o código
async function fetchPokemon(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json
}

const dragoniteRequest = fetchPokemon('https://pokeapi.co/api/v2/pokemon/dragonite');

dragoniteRequest.then(response => console.log(response));
