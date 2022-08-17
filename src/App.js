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

  return (
    <>
      <Scoreboard score={score} highScore={highScore} />
      <Main setScore={setScore} score={score} />
    </>
  )
}

export default App;
