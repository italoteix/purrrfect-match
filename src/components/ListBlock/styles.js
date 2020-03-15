import styled from 'styled-components';

import breakpoints from '../../styles/breakpoints';

export const Container = styled.section`
  flex: 1;

  background: ${props => props.theme.colors.whiteGradient};
  border-radius: ${props => props.theme.radius};
  margin-top: ${props => props.theme.sizes.lg};
  width: 100%;
  overflow-y: scroll;

  scrollbar-width: thin;
  scrollbar-color: ${props => props.theme.colors.darkBlue} transparent;

  & > div {
    border-bottom: 1px solid #d0dae8;
    padding: 1.5rem;
  }

  h1,
  h3 {
    text-transform: uppercase;
    font-size: 20px;
    line-height: 20px;
  }

  a {
    color: #000000;
    font-style: italic;
    font-size: 15px;
    line-height: 14px;
  }

  a:hover {
    color: ${props => props.theme.colors.darkBlue};
  }

  @media ${breakpoints.tablet} {
    &:last-of-type {
      flex: 3;
      margin-left: 1.75rem;
    }

    h1 {
      font-size: 30px;
      line-height: 24px;
    }
  }
`;

export const PostBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    margin-left: 0.5rem;
  }
`;

export const CatBlock = styled.article`
  display: flex;
  align-items: center;

  margin: 0 1.5rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #d0dae8;

  h3 {
    margin-right: 0.5rem;
  }

  p {
    margin: 0.2rem 0;
  }
`;

export const CatImg = styled.div`
  display: flex;
  flex-shrink: 0;

  width: 80px;
  height: 80px;
  border-radius: ${props => props.theme.radius};
  margin-right: 0.5rem;
  overflow: hidden;

  img {
    width: 100%;
    min-height: 100%;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  @media ${breakpoints.phone} {
    margin-left: 20%;
  }

  @media ${breakpoints.phablet} {
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;

    & h3 {
      flex: 1;
      margin-left: 1.5rem;
    }
  }
`;

export const Bio = styled.div`
  flex: 1;

  @media ${breakpoints.laptop} {
    flex: 3;
    display: flex;

    p:first-child {
      flex: 1;
      margin-right: 1rem;
    }

    p + p {
      flex: 2;
      margin-right: 1rem;
    }
  }
`;

export const EmptyList = styled.p`
  font-weight: bold;
  padding: 1.5rem;
`;
