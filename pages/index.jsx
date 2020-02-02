import React, { useState, useEffect } from 'react'
import Card from '../components/card'
import { initCards } from '../function'

const App = () => {
  const [cards, setCards] = useState([])
  const [revealed, setRevealed] = useState([])
  const [disableClick, setDisableClick] = useState(false)
  const [matched, setMatched] = useState([])

  const handleClicked = (id) => {
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
        setTimeout(resetRevealed, 2000)
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

  useEffect(() => {
    setCards(initCards(['1', '2', '3', '4', '5', '6']))
  }, [])

  return (
    cards.map((card) => {
      return(
        <Card
          key={card.id}
          id={card.id}
          text={card.type}
          type={card.type}
          handleClicked={handleClicked}
          isRevealed={revealed.includes(card.id)}
          isMatched={matched.includes(card.id)}
          disableClick={disableClick || matched.includes(card.id)}/>
      )
    })
  )
}

export default App
