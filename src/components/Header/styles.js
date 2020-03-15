import styled from 'styled-components';

import breakpoints from '../../styles/breakpoints';

export const Container = styled.header`
  display: flex;
  align-self: center;

  a {
    display: flex;
    flex: 1;
    padding: 0 0.5rem;
    margin-bottom: ${props => props.theme.sizes.lg};
    justify-content: center;
  }

  img {
    max-width: 100%;
  }

  @media ${breakpoints.tablet} {
    margin: 0;
    padding: 0;
    align-self: flex-start;

    a {
      justify-content: flex-start;
    }
  }
`;
