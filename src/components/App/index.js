import React, { Component } from 'react';

import Game from 'components/Game';

import { Container } from './styles';

class App extends Component {

  render() {
    return (
      <Container>
        <Game />
      </Container>
    );
  }
}

export default App;
