import React, { Component } from 'react';
import styled from 'styled-components';
import fire from 'fire';
import gif from 'assets/img/tumblr_nreno0duJh1td0of9o1_500.gif';

const Header = styled.h1`
  font-size: 3em;
  color: white;
  margin-bottom: 20px;
`;

const ScoresWrapper = styled.ul`
  margin: 0;
  padding-top: 50px;
  box-sizing: border-box;
  background-image: url(${gif});
  background-size: cover;
  list-style: none;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Score = styled.li`
  font-size: 1.5em;
  width: 150px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
 
  
  &:nth-child(odd) {
    color: lightgrey;
  }
`;


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
      console.log(this.state.highScores);
    });
  }

  addMessage = (e) => {
    e.preventDefault();
    const score = {
      name: e.target.name.value,
      score: parseInt(e.target.points.value, 10),
    };
    fire.database().ref('highScores').push(score);
    e.target.name.value = '';
    e.target.points.value = '';
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


/*

<form onSubmit={this.addMessage}>
          <input name="name" type="text" />
          <input name="points" type="number" />
          <input type="submit" />
        </form>
 */
