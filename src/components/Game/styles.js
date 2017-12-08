import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  @media (orientation : portrait) {
    flex-direction: column;
  }
`;

export { Container };
