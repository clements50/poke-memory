import styles from './Main.module.css'
import Gameboard from './Gameboard/Gameboard'

function Main(props) {
  const {setScore, score} = props

  return (
    <div className={styles.main}>
     <Gameboard setScore={setScore} score={score}/> 
    </div>
  )
}

export default Main;
