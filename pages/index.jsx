import React, { useState, useEffect } from 'react'
import Card from '../components/card'
import ClickCount from '../components/clickCount'
import GlobalScore from '../components/globalScore'
import MyBestScore from '../components/myBestScore'
import NewGame from '../components/newGame'
import { initCards } from '../function'

const App = () => {
  const [cards, setCards] = useState([])
  const [revealed, setRevealed] = useState([])
  const [disableClick, setDisableClick] = useState(false)
  const [matched, setMatched] = useState([])
  const [clickCount, setClickCount] = useState(0)
  const [myBestScore, setMyBestScore] = useState(0)
  const [globalScore, setGlobalScore] = useState(0)

  const cardsType = ['1', '2', '3', '4', '5', '6']

  useEffect(async() => {
      const response = await fetch('http://localhost:5000/global-score')
      const data = await response.text()
      setGlobalScore(data)
  }, [])

  useEffect(() => {
    setCards(initCards(cardsType))
    setMyBestScore(localStorage.getItem('my-best-score'))
  }, [])

  useEffect(() => {
    if (cards.length==(cardsType.length*2)){
      GameWon()
      setMyBestScore(localStorage.getItem('my-best-score'))
    }
  }, [matched])

  const handleClicked = (id) => {
    setClickCount(clickCount + 1)
    setDisableClick(true)
    if (revealed.length === 0) {
      setRevealed([...revealed, id])
      setDisableClick(false)
    }
    else {
      if (sameCardClicked(id)) return
      setRevealed([...revealed, id])
      if (isMatch(id)) {
        setMatched([...matched, revealed[0], id])
        resetRevealed()
      }
      else {
        setTimeout(resetRevealed, 1000)
      }
    }
  }

  const sameCardClicked = (id) => revealed.includes(id)

  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id)
    const revealedCard = cards.find((card) => revealed[0] === card.id)
    return clickedCard.type === revealedCard.type
  }

  const resetRevealed = () => {
    setRevealed([])
    setDisableClick(false)
  }

  const newGame = () => {
    resetRevealed()
    setMatched([])
    setClickCount(0)
    setCards(initCards(['1', '2', '3', '4', '5', '6']))
  }

  const GameWon = () => {
    console.log(cards.length)
    if(matched.length === cards.length) {
      if(clickCount < myBestScore) {
        localStorage.setItem('my-best-score', clickCount)
        document.cookie = 'my-best-score=' + clickCount
      }
    }
  }

  return (
    <div>
      <ClickCount clickCount={clickCount}/>
      <NewGame newGame={newGame}/>
      <MyBestScore myBestScore={myBestScore}/>
      <GlobalScore globalScore={globalScore}/>
      {
        cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              text={card.type}
              type={card.type}
              handleClicked={handleClicked}
              isRevealed={revealed.includes(card.id)}
              isMatched={matched.includes(card.id)}
              disableClick={disableClick || revealed.includes(card.id) || matched.includes(card.id)}/>
        ))
      }
    </div>
  )
}

export default App
