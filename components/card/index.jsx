import React from 'react'

const Card = ({
  id,
  text,
  type,
  handleClicked,
  isRevealed
}) => (
  <div 
    className='cards' 
    onClick={() => handleClicked(id)}
  >
    {isRevealed ? text : ''}
  </div>
)

export default Card