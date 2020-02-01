import React, { useState, useEffect } from 'react'
import Card from '../components/card'
import { initCards } from '../function'

const App = () => {
  const [revealed, setRevealed] = useState([])
  const [cards, setCards] = useState([])

  const handleClicked = (id) => {
    setRevealed([...revealed, id])
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
          isRevealed={revealed.includes(card.id)}/>
      )
    })
  )
}

export default App
