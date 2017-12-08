import React, { Component } from 'react';

import Start from 'components/Start';
import Game from 'components/Game';
import Score from 'components/Score';

import { Container } from './styles';

const steps = [Start, Game, Score];


class App extends Component {
  state = {
    step: 0,
    score: 0,
  }

  nextStep = () => this.setState(prevState => ({
    step: (prevState.step + 1) % 4,
  }));

  resetStep = () => this.setState({ step: 0 });

  render() {
    const Step = steps[this.state.step];

    return (
      <Container>
        <Step nextStep={this.nextStep} onGameOver={(player) => console.log(player)} />
      </Container>
    );
  }
}

export default App;
