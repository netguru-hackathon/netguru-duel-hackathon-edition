import React, { Component } from 'react';
import Start from 'components/Start';
import Game from 'components/Game';
import Score from 'components/Score';

const step = {
  start: 'start',
  game: 'game',
  score: 'score',
  scoreBoard: 'scoreBoard',
};

class App extends Component {

  state = {
    step: step.start,
    score: 0,
  }

  render() {
    return (
      <div>
        <Start />
      </div>
    );
  }
};

export default App;
