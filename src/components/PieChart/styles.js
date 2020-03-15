import styled from 'styled-components';

import breakpoints from '../../styles/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;

  & > div {
    display: flex;
    flex: 2;
  }

  & > div:first-child {
    flex: 1;
    flex-direction: column;
    justify-content: space-evenly;

    margin: 1rem auto 0;
    min-width: 30%;
  }

  .pie-container {
    flex: 1;
    align-self: center;
    align-items: center;
    justify-content: center;
    max-width: 150px;
  }

  @media ${breakpoints.phablet} {
    flex-direction: row;

    & > div:first-child {
      margin: 0;
    }

    .pie-container {
      align-self: flex-start;
      margin: 0 1rem;
    }
  }
`;

export const Label = styled.div`
  display: flex;
  margin: 0.5rem 0;

  div {
    width: 15px;
    height: 14px;
    min-width: 15px;
    margin-right: 0.5rem;
    background-color: ${props => props.labelColor};
  }

  @media ${breakpoints.phablet} {
    margin: 0;
  }
`;
