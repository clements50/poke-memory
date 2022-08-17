import { useState, useEffect } from 'react'
import PokemonCard from '../PokemonCard/PokemonCard'
import shufflePokemon from './shuffle'

function Gameboard(props) {
  const [pokemons, setPokemon] = useState([])
  const [clickedPokemonCards, setClickedPokemonCards] = useState([])
  const { setScore, score, highScore, setHighScore} = props

  useEffect(() => {
    getPokeData()
  }, [])


  async function getPokeData() {
    let newPokemons = []

    for (let i = 1; i < 13; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      const pokeData = await response.json();

      const newPokemon = { name: pokeData.name, image: pokeData.sprites.front_default }
      newPokemons.push(newPokemon)
      setPokemon(pokemons.concat(newPokemon))

    }

    shufflePokemon(newPokemons)
    setPokemon(newPokemons)
  }


  function checkForLoser(e) {
    const clickedPokemonCard = e.target.dataset

    const pokemonAlreadySelected = clickedPokemonCards.some(pokemonCard =>
      pokemonCard === clickedPokemonCard)

    if (!pokemonAlreadySelected) {
      setScore(score + 1)
      setClickedPokemonCards(clickedPokemonCards.concat(clickedPokemonCard))
      shufflePokemon(pokemons)
    } else {
      setScore(0)
      setClickedPokemonCards([])
      shufflePokemon(pokemons)
    }
    
  }

  return (
    <div className='gameboard'>
      {
        pokemons.map(pokemon => <PokemonCard
          key={pokemon.name}
          checkForLoser={checkForLoser}
          pokemonName={pokemon.name}
          pokemonImg={pokemon.image}
        />)
      }
    </div>
  )
}

export default Gameboard;
