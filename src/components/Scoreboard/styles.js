import styled from 'styled-components';
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

export { Header, ScoresWrapper, Score };
