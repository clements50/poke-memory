  const shufflePokemon = pokemon => {
  for (let i = pokemon.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = pokemon[i];
    pokemon[i] = pokemon[j];
    pokemon[j] = temp;
  }
}

export default shufflePokemon;
