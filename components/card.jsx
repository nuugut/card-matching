import React from 'react'

const Card = ({
  id,
  text,
  type,
  handleClicked,
  isRevealed,
  isMatched,
  disableClick
}) => (
  <div 
    className={`cards ${isRevealed || isMatched ? 'revealed' : ''}`} 
    onClick={() => disableClick ? null : handleClicked(id)}
    type={type}
  >
    {isRevealed || isMatched ? text : ''}
  </div>
)

export default Card