import styles from './PokemonCard.module.css'

function PokemonCard(props) {
  const { pokemonImg, pokemonName, checkForLoser } = props

  return (
    <div className={styles.pokemon_card} onClick={checkForLoser} data-set-name={pokemonName}>
      <img src={pokemonImg} alt={pokemonName} data-set-name={pokemonName} />
      <div data-set-name={pokemonName}>{pokemonName}</div>
    </div>
  )
}

export default PokemonCard;
