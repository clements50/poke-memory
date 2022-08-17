import { useState, useEffect } from 'react'
import Scoreboard from './components/Scoreboard/Scoreboard'
import Main from './components/Main/Main'
import './App.css'

function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(JSON.parse(localStorage.getItem('HIGH_SCORE')) || 0)

  useEffect(() => {
    localStorage.setItem('HIGH_SCORE', JSON.stringify(highScore))
  })


  if (score > highScore) {
    setHighScore(score)
  }


  return (
    <>
      <Scoreboard score={score} highScore={highScore} />
      <Main setScore={setScore} score={score} highScore={highScore} setHighScore={setHighScore} />
    </>
  )
}

export default App;
