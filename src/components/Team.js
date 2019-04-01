import React from 'react'
import Player from './Player'

const Team = (props) => {

  const renderedPlayers = props.team.players.map(player => {
    return <Player key={player.id} player={player} />
  })

  return (
    <div className='team'>
      <h3>{props.team.team_name}</h3>
      <h4> Colors: {props.team.colors[0]}, {props.team.colors[1]} </h4>
      {renderedPlayers}
    </div>
  )
}

export default Team
