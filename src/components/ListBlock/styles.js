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
    font-style: italic;
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

export const CatImg = styled.div`
  display: flex;
  flex-shrink: 0;

  width: 80px;
  height: 80px;
  border-radius: 5px;
  margin-right: 0.5rem;
  overflow: hidden;

  img {
    width: 100%;
    min-height: 100%;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  @media (min-width: 400px) {
    margin-left: 20%;
  }

  @media (min-width: 640px) {
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

  @media (min-width: 1024px) {
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
