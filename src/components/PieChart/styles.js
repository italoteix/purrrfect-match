import styled from 'styled-components';

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

  @media (min-width: 640px) {
    flex-direction: row;

    & > div:first-child {
      margin: 0;
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

  @media (min-width: 640px) {
    margin: 0;
  }
`;
