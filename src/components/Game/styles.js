import styled from 'styled-components';

const ArenaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  @media (orientation : portrait) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { ArenaContainer, Container };
