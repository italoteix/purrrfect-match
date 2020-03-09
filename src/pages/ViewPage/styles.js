import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  padding: 2rem 1rem;

  header {
    display: flex;
    padding: 0 0.5rem;
    margin-bottom: 2rem;
    justify-content: center;
  }

  main {
    display: flex;
    flex-direction: column;

    img {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      width: 100%;
    }
  }
`;

export const CardInfo = styled.section`
  background: var(--white-gradient);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 1.5rem;

  article + article {
    margin-top: 1.5rem;
  }

  h1 {
    font-weight: bold;
    font-size: 30px;
    line-height: 29px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-style: italic;
    font-weight: bold;
    font-size: 20px;
    line-height: 19px;
    margin-bottom: 1rem;
  }

  p {
    font-size: 13px;
    font-weight: 300;
    line-height: 13px;

    strong {
      font-weight: bold;
    }
  }

  a {
    color: #000;
    font-size: 13px;
    line-height: 12px;
    text-decoration: underline;

    &:hover {
      color: var(--dark-blue);
    }
  }

  .info-grid {
    p {
      margin: 0.6rem 0;
    }
  }

  .personality + .personality {
    margin-top: 1rem;
  }
`;

export const BarGraph = styled.div`
  background-color: var(--light-blue);
  border-radius: 10px;
  position: relative;
  margin: 0.5rem 0;
  height: 18px;
  width: 100%;

  div {
    background-color: var(--dark-blue);
    border-radius: 10px;
    position: absolute;
    height: 100%;
    width: ${props => `${props.width * 100}%`};
    z-index: 10;
  }
`;
