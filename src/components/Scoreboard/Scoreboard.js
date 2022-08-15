import styles from './Scoreboard.module.css'
import logo from '../../assets/International_Pokémon_logo.svg.png'

function Scoreboard(props) {

  const { highScore, score } = props;

  return (
    <div className={styles.scoreboard}>
      <img src={logo} alt="Pokemon Logo" className={styles.logo}/>
      <div className={styles.scores}>
        <div className={styles.container}>
          <p>Current Score</p>
          <div className={styles.currentScore}>{score}</div>
        </div>
        <div className={styles.container}>
          <p>Highest Score</p>
          <div className={styles.highestScore}>{highScore}</div>
        </div>
      </div>
    </div>
  )
}

export default Scoreboard;
