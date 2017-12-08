import React, { Component } from 'react';

import Start from 'components/Start';
import Game from 'components/Game';
import Score from 'components/Score';
import Scoreboard from 'components/Scoreboard';

import { Container } from './styles';

const steps = [Start, Game, Score, Scoreboard];


class App extends Component {
  state = {
    step: 2,
    score: 0,
  }

  nextStep = () => this.setState(prevState => ({
    step: (prevState.step + 1) % 4,
  }));

  resetStep = () => this.setState({ step: 0 });

  handleGameOver = () => {
    this.nextStep();
  }

  render() {
    const Step = steps[this.state.step];

    return (
      <Container>
        <Step nextStep={this.nextStep} onGameOver={this.handleGameOver} />
      </Container>
    );
  }
}

export default App;
