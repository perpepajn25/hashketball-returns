import React from 'react'
import Team from './Team'
import { connect } from 'react-redux'

const TeamList = (props) => {
  console.log(props);

  const renderedTeams = props.teams.map(team => {
    return <Team key={team.id} team={team} />
  })

  return (
    <div className="team-list">
      {renderedTeams}
    </div>
  )
}

const mapStateToProps = ({teams}) => {
  return {teams}
}

export default connect(mapStateToProps)(TeamList)
