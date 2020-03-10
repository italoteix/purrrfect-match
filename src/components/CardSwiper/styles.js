import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  overflow-x: auto;
  margin: 0 -1rem;

  a {
    border-radius: 5px;
    margin-left: 1rem;
    min-width: 60%;
    overflow: hidden;
    padding-top: 60%;
    position: relative;

    &:last-child {
      margin-right: 1rem;
    }
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (min-width: 640px) {
    a {
      min-width: 40%;
      padding-top: 40%;
    }
  }
`;
