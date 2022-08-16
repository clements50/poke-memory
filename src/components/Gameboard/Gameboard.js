import { useState, useEffect } from 'react'

function Gameboard(props) {
  const [pokemons, setPokemon] = useState([])


  useEffect(() => {
    getPokeData()
  }, [])

  async function getPokeData() {

    let newPokemons = []

    for (let i = 1; i < 13 ; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      const pokeData = await response.json();
      const newPokemon = { name: pokeData.name }
      newPokemons.push(newPokemon)
    }

    shufflePokemon(newPokemons)
    setPokemon(newPokemons)
  }

  const shufflePokemon = pokemon => {
  for (let i = pokemon.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = pokemon[i];
    pokemon[i] = pokemon[j];
    pokemon[j] = temp;
  }
}


  return (
    <div className='gameboard'>
    </div>
  )
}

export default Gameboard;
