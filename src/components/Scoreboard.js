import React, { Component } from 'react';
import styled from 'styled-components';
import fire from 'fire';

const ScoresWrapper = styled.ul`
  list-style: none;
  width: 50%;
`;

const Score = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;


class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = { highScores: [] }; // <- set up react state
  }

  componentDidMount(){
    let messagesRef = fire.database().ref('highScores').orderByChild("score").limitToLast(10);
    messagesRef.on('child_added', snapshot => {
      let score = { points: snapshot.val(), id: snapshot.key };
      this.setState({ highScores: [score].concat(this.state.highScores) });
      console.log(this.state.highScores);
    });

  }

  addMessage = (e) => {
    e.preventDefault();
    const score = {
      name: e.target.name.value,
      score: parseInt(e.target.points.value),
    }
    fire.database().ref('highScores').push( score );
    e.target.name.value = '';
    e.target.points.value = '';
  }

  render() {
    return (
      <div>
      <form onSubmit={this.addMessage}>
        <input name="name" type="text"/>
        <input name="points" type="number"/>
        <input type="submit" />
      </form>
      <ScoresWrapper>
        {
          this.state.highScores.map(score => {
            return (
              <li key={score.id}>{score.points.name} {score.points.score}</li>
            );
          })
        }
      </ScoresWrapper>
      </div>
    );
  }
}

export default Scoreboard;
