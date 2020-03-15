import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  overflow-y: hidden;
  padding: 2rem 1rem;

  main {
    display: flex;
    flex: 1;

    width: 100%;
    overflow: auto;
  }
  @media (min-width: 768px) {
    padding: 3.5rem;
  }
`;

export const Header = styled.header`
  display: flex;

  width: 100%;

  img {
    height: 2.5rem;
    padding: 0.4rem;
    padding-left: 0;
  }

  a {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    color: #000;
    text-transform: uppercase;
    font-size: 15px;
    line-height: 14px;
    background-color: ${props => props.theme.colors.white};
    border-radius: ${props => props.theme.radius};
    max-width: 316px;

    svg {
      margin-right: 0.64rem;
    }
  }

  @media (min-width: 768px) {
    img {
      padding: 0;
    }
  }
`;
