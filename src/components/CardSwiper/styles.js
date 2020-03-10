import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  overflow-x: auto;
  margin: -1rem;

  a {
    display: flex;
    flex-basis: auto;
    margin-left: 1rem;
    min-width: 60%;
    height: auto;
    border-radius: 5px;
    overflow: hidden;

    &:before {
      content: '';
      padding-top: 100%;
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (min-width: 640px) {
    a {
      min-width: 40%;
    }
  }
`;
