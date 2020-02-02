const NewGame = ({ newGame }) => (
    <div 
      className='new-game'
      onClick={() => newGame()}>
      New Game
    </div>
  )
  
  export default NewGame