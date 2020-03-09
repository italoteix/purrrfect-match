import styled from 'styled-components';

export const Container = styled.section`
  flex: 1;

  background: var(--white-gradient);
  border-radius: 5px;
  margin-top: 2rem;
  width: 100%;
  overflow-y: scroll;

  scrollbar-width: thin;
  scrollbar-color: var(--dark-blue) transparent;

  & > div {
    border-bottom: 1px solid #d0dae8;
    padding: 1.5rem;
  }

  & > div:not(:first-of-type) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 1.5rem;
    padding: 1.5rem 0;
  }

  h1,
  h3 {
    text-transform: uppercase;
    font-size: 20px;
    line-height: 20px;
    font-weight: bold;
  }

  a {
    color: #000000;
    font-style: italic;
    font-size: 15px;
    line-height: 14px;
  }

  a:hover {
    color: var(--dark-blue);
  }

  @media (min-width: 768px) {
    &:last-of-type {
      flex: 3;
      margin-left: 1.75rem;
    }

    & > div:first-of-type {
      display: flex;
      align-items: end;

      min-height: 78px;
    }

    h1 {
      font-size: 30px;
      line-height: 24px;
    }
  }
`;

export const CatBlock = styled.article`
  display: flex;
  align-items: center;

  margin: 0 1.5rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #d0dae8;

  img {
    flex-shrink: 0;

    width: 80px;
    height: 80px;
    border-radius: 5px;
    margin-right: 0.5rem;
  }

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }

  img + div {
    justify-content: space-around;
    flex: 1;
  }

  h3 {
    margin-right: 0.5rem;
    font-style: italic;
  }

  h3 + div {
    flex-direction: column;
    align-items: flex-start;
  }

  p {
    font-size: 13px;
    line-height: 13px;
    font-weight: 300;
    margin: 0.2rem 0;

    strong {
      font-weight: bold;
    }
  }

  @media (min-width: 1024px) {
    h3 + div {
      flex: 3;
      flex-direction: row;
      justify-content: space-evenly;
    }
  }
`;
