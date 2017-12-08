/* eslint-disable */
import React, { Component } from 'react';
import fire from 'fire';
import { Header, ScoresWrapper, Score } from './styles';


class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = { highScores: [] }; // <- set up react state
  }

  componentDidMount() {
    const messagesRef = fire.database().ref('highScores').orderByChild('score').limitToLast(10);
    messagesRef.on('child_added', (snapshot) => {
      const score = { points: snapshot.val(), id: snapshot.key };
      this.setState({ highScores: [score].concat(this.state.highScores) });
    });
  }

  render() {
    return (
      <div>
        <ScoresWrapper>
          <Header>Chwała zwycięzcom!</Header>
          {
            this.state.highScores.map(score => (
              <Score key={score.id}>
                <div>{score.points.name}</div>
                <div>{score.points.score}</div>
              </Score>
            ))
          }
        </ScoresWrapper>
      </div>
    );
  }
}

export default Scoreboard;
