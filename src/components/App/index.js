import React, { Component } from 'react';

import Start from 'components/Start';
import Game from 'components/Game';
import Score from 'components/Score';

const steps = {
  start: 'start',
  game: 'game',
  score: 'score',
  scoreBoard: 'scoreBoard',
};

import { Container } from './styles';

class App extends Component {

  state = {
    step: steps.start,
    score: 0,
  }

  setStep = step => this.setState({ step });

  render() {
    return (
      <Container>
        <Game />
        <Start setStep={this.setStep} />
      </Container>
    );
  }
};

export default App;
