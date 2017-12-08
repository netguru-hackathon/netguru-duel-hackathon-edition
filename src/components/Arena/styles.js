import styled, { keyframes } from 'styled-components';
import Player from 'components/Player';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
`;

const bounce = keyframes`
  0%   { margin-top:5px; }
  50%  { margin-top:15px; }
  100% { margin-top:5px; }
`;

const bounceRotate = keyframes`
  0%   { transform:rotate(0deg); }
  50%  { transform:rotate(3deg); }
  75%  { transform:rotate(-2deg); }
  100% { transform:rotate(0deg); }
`;

const LeftPlayer = styled(Player)`
  animation: ${bounce} 2s ease-in-out infinite, ${bounceRotate} 2s ease-in-out infinite;;
`;

const RightPlayer = styled(Player)`
  animation: ${bounce} 3s ease-in-out infinite, ${bounceRotate} 3s ease-in-out infinite;;
`;

export { Container, LeftPlayer, RightPlayer };
