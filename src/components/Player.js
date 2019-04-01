import React from 'react'
import { selectPlayer } from '../Redux/Actions'
import { connect } from 'react-redux'

const Player = (props) => {
  console.log(props);

  return (
    <div onClick={() => props.selectPlayer(props.player)}>
      <p>{props.player.name}</p>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state);
}

export default connect(mapStateToProps, {selectPlayer})(Player)
