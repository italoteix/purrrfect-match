import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  background: var(--white-gradient);
  border-radius: 5px;
  margin-top: 2rem;
  width: 100%;

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
`;

export const CatBlock = styled.div`
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
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }

  h3 {
    margin-right: 0.5rem;
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
`;
