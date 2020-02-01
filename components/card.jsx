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
    type={type}
  >
    {isRevealed ? text : ''}
  </div>
)

export default Card