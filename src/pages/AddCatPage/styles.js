import styled from 'styled-components';

import breakpoints from '../../styles/breakpoints';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  padding: 2rem 1rem 3rem;

  main {
    background: ${props => props.theme.colors.whiteGradient};
    border-radius: ${props => props.theme.radius};
  }

  aside {
    display: none;
  }

  @media ${breakpoints.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 44px 1fr;
    grid-template-areas: 'h h' 'a m';
    row-gap: 1.5rem;
    column-gap: 1rem;

    padding: 1.5rem 2.5rem;

    header {
      grid-area: h;
    }

    aside {
      /*
        Not optimal image resizing. Ideally would be different images with different sizes for each responsive design.
        The text was flatted on image because the font is paid and not included on design files.
      */

      grid-area: a;
      display: block;
      overflow: hidden;
      border-radius: ${props => props.theme.radius};

      img {
        height: 100%;
        max-height: 83vh;
        width: auto;
        border-radius: ${props => props.theme.radius};
      }
    }

    main {
      grid-area: m;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
