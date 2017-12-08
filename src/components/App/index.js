import React, { Component } from 'react';
import logo from './logo.svg';

class App extends Component {
  state = {
    count: 0,
  }

  componentDidMount() {
    setInterval(this.increment, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.increment);
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <header>
          <img src={logo} alt="logo" />
          <h1>Welcome to React | Count: {this.state.count}</h1>
        </header>
        <p>
          To get started, edit <code>src/components/App/index.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
