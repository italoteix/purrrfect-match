import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  padding: 2rem 1rem 3rem;

  header {
    display: flex;
    padding: 0 0.5rem;
    margin-bottom: 2rem;
    justify-content: center;
  }

  main {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 29px;
    color: var(--white);
    margin: 1.5rem 0;
  }

  @media (min-width: 768px) {
    padding: 2.5rem;

    header {
      padding: 0;
      justify-content: flex-start;
    }

    main {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  @media (min-width: 1024px) {
    padding: 2rem 3.5rem;
  }
`;

export const ProfilePic = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;

  /* Keep aspect ratio */
  padding-top: 100%;
  position: relative;

  img {
    position: absolute;
    top: 0;
    height: 100%;
    min-height: 100%;
    min-width: 100%;
    object-fit: cover;

    /* Center align horizontaly */
    left: 50%;
    transform: translateX(-50%);
  }

  @media (min-width: 768px) {
    border-radius: 10px;
    padding: 0;
    flex: 2;

    height: 300px;
  }

  @media (min-width: 1024px) {
    height: unset;
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

  p,
  address {
    font-size: 13px;
    font-weight: 300;
    font-style: normal;
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

  .about-cont {
    p {
      margin: 0.6rem 0;
    }
  }

  .personality + .personality {
    margin-top: 1rem;
  }

  @media (min-width: 768px) {
    border-radius: 5px;
    flex: 3;
    margin-left: 1rem;
    padding: 2rem 3rem 3rem;

    h1 {
      text-align: left;
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas: 'a a' 'p d';
      gap: 1rem 2rem;
    }

    .about-cont {
      grid-area: a;

      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 2fr 4fr 1fr;
      grid-template-areas: 'h h h' 'a f p' 'l b b' 'v v v';
      column-gap: 2rem;

      & > * {
        margin: 0;
        padding: 0;
      }

      & h3 {
        grid-area: h;
      }
      & address {
        grid-area: l;
      }
      & > *:nth-child(2) {
        grid-area: a;
      }
      & > *:nth-child(4) {
        grid-area: f;
      }
      & > *:nth-child(5) {
        grid-area: p;
      }
      & > *:nth-child(6) {
        grid-area: b;
      }
      & > *:last-child {
        grid-area: v;
      }
    }

    .personality-container {
      grid-area: p;
    }

    .day-container {
      grid-area: d;
    }
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
