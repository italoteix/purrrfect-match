import styled from 'styled-components';

import breakpoints from '../../styles/breakpoints';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  padding: 2rem 1rem 3rem;

  main {
    display: flex;
    flex-direction: column;
  }

  h2 {
    color: ${props => props.theme.colors.white};
    margin: 1.5rem 0;
  }

  @media ${breakpoints.tablet} {
    padding: 2.5rem;

    main {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  @media ${breakpoints.laptop} {
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

  @media ${breakpoints.tablet} {
    border-radius: 10px;
    padding: 0;
    flex: 2;

    height: 300px;
  }

  @media ${breakpoints.laptop} {
    height: unset;
  }
`;

export const CardInfo = styled.section`
  background: ${props => props.theme.colors.whiteGradient};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 1.5rem;

  article + article {
    margin-top: 1.5rem;
  }

  h1 {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  h3 {
    margin-bottom: 1rem;
  }

  a {
    color: #000;
    font-size: 13px;
    line-height: 12px;
    text-decoration: underline;

    &:hover {
      color: ${props => props.theme.colors.darkBlue};
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

  @media ${breakpoints.tablet} {
    border-radius: ${props => props.theme.radius};
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
  background-color: ${props => props.theme.colors.lightBlue};
  border-radius: 10px;
  position: relative;
  margin: 0.5rem 0;
  height: 18px;
  width: 100%;

  div {
    background-color: ${props => props.theme.colors.darkBlue};
    border-radius: 10px;
    position: absolute;
    height: 100%;
    width: ${props => `${props.width * 100}%`};
    z-index: 10;
  }
`;
