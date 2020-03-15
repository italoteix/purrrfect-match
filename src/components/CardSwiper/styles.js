import styled from 'styled-components';

import breakpoints from '../../styles/breakpoints';

export const Container = styled.article`
  display: flex;
  overflow-x: auto;
  margin: 0 -${props => props.theme.sizes.md};

  a {
    border-radius: ${props => props.theme.radius};
    margin-left: ${props => props.theme.sizes.md};
    min-width: 60%;
    overflow: hidden;
    padding-top: 60%;
    position: relative;

    /* Move last block from screen side */
    &:last-child {
      box-sizing: content-box;
      border-right: ${props => props.theme.sizes.md} solid transparent;
    }
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;

    /* To keep border radius when last 'a' has right border */
    &:last-child {
      border-radius: ${props => props.theme.radius};
    }
  }

  @media ${breakpoints.phablet} {
    a {
      min-width: 40%;
      padding-top: 40%;
    }
  }

  @media ${breakpoints.tablet} {
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0;

    a {
      flex: 0;
      margin: 0 1rem 1rem 0;
      min-height: 200px;
      min-width: 200px;
      padding: 0.5rem;

      &:last-child {
        border: none;
        margin-right: 0;
      }
    }
  }
`;
