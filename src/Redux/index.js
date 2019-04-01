import teamsArr from '../gamesData'

const initialState = {
  teams: teamsArr.teams,
  selectedPlayer: null
}

export default function managePlayerDetails(state = initialState, action) {
  switch(action.type) {
    case 'SELECT_PLAYER':
      console.log(state);
      let selectedPlayer = action.payload
      let team = state.teams.find(team => team.players.includes(selectedPlayer))
      let player = team.players.find(player => player.name === selectedPlayer.name)
      console.log(player);
      return {...state, selectedPlayer: player}
    default:
      return state
  }
}
