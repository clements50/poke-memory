import styles from './Main.module.css'
import Gameboard from '../Gameboard/Gameboard'

function Main(props) {
  return (
    <div className={styles.main}>
     <Gameboard/> 
    </div>
  )
}

export default Main;
