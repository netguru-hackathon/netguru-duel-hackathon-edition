import React, { Component } from 'react';
import Start from 'components/Start';
import Game from 'components/Game';
import Score from 'components/Score';
import Scoreboard from 'components/Scoreboard';

const steps = {
  start: 'start',
  game: 'game',
  score: 'score',
  scoreBoard: 'scoreBoard',
};

class App extends Component {
  state = {
    step: steps.start,
    score: 0,
  }

  setStep = step => this.setState({ step });

  render() {
    return (
      <div>
        <Start setStep={this.setStep} />
      </div>
    );
  }
}

export default App;
