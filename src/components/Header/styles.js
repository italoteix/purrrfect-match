import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-self: center;

  a {
    display: flex;
    flex: 1;
    padding: 0 0.5rem;
    margin-bottom: 2rem;
    justify-content: center;
  }

  img {
    max-width: 100%;
  }

  @media (min-width: 768px) {
    margin: 0;
    padding: 0;
    align-self: flex-start;

    a {
      justify-content: flex-start;
    }
  }
`;
