import React from 'react'
import players from './players'
import Player from './Player'

function PlayerList() {
  return (
    <div className='alo' style={{display:'flex',justifyContent:'space-between',marginTop:'200px'}}>
      {players.map((el)=><Player data={el}     />) }
    </div>
  )
}

export default PlayerList
