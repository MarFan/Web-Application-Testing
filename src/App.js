import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

import { Container } from 'semantic-ui-react';

import Dashboard from './components/Dashboard'
import Display from './components/Display';

const initialValues = {
  strike: 0,
  ball: 0,
  inning: 1,
  inningHalf: 0, // 0 top, 1 bottom
  outs: 0,
  home: 0,
  away: 3
}

function App() {

  const [scoreboard, setScoreboard] = useState(initialValues);
  const [actionMsg, setActionMsg] = useState("");

  const updateBoard = action => {
    let actionInt = parseInt(scoreboard[action]) + 1;
    
    switch(action) {
      case "strike":
        setActionMsg(`Strike ${actionInt}`);
        break;
      case "ball":
        setActionMsg(`Ball ${actionInt}`);
        break;
      case "foul":
        setActionMsg('Foul ball!')
        break;
    }
    
    if(action === 'foul' && scoreboard.strike < 2) { 
      setActionMsg('Foul ball!');
      action = 'strike'; 
      actionInt = parseInt(scoreboard[action]) + 1;
    }

    if(action === 'hit'){
      setActionMsg('It\'s a hit!');
      setScoreboard({
        ...scoreboard,
        strike: 0,
        ball: 0
      })
    }else if(action === 'strike' && actionInt >= 3) {
      setActionMsg('Stike 3! You\'re Out!');
      setScoreboard({
        ...scoreboard,
        strike: 0,
        ball: 0
      })
    }else if(action === 'ball' && actionInt >= 4) {
      setActionMsg('Ball 4! Take a walk!');
      setScoreboard({
        ...scoreboard,
        strike: 0,
        ball: 0
      })
    }else{
      setScoreboard({
        ...scoreboard,
        [action]: actionInt
      });
    }
  }

  return (
    <Container className="App" style={{marginTop: '2rem'}}>
      <Display scoreboard={scoreboard} actionMsg={actionMsg} />
      <Dashboard updateBoard={updateBoard} />
    </Container>
  );
}

export default App;
