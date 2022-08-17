import styles from './Main.module.css'
import Gameboard from './Gameboard/Gameboard'

function Main(props) {
  const {setScore, score, highScore, setHighScore} = props

  return (
    <div className={styles.main}>
     <Gameboard setScore={setScore} score={score} highScore={highScore} setHighScore={setHighScore}/> 
    </div>
  )
}

export default Main;
