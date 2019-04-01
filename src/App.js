import React, { Component } from 'react';
import './App.css';
import gamesData from './gamesData'
import TeamList from './components/TeamList'
import PlayerDetails from './components/PlayerDetails'
import NavHeader from './components/Header'
import 'semantic-ui-css/semantic.min.css';


class App extends Component {
  // state = {
  //   selectedPlayer: null
  // }
  //
  // handleSelectPlayer = (player) => {
  //   this.setState({
  //     selectedPlayer: player
  //   })
  // }

  render() {
    return (
      <div className="App">
        <NavHeader />
        <TeamList />
        <PlayerDetails />
      </div>
    );
  }
}

export default App;

// <PlayerDetails />}
