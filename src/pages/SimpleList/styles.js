import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  height: 100%;
  padding: 2rem 1rem;
`;

export const Header = styled.header`
  display: flex;

  width: 100%;

  img {
    height: 2.5rem;
    padding: 0.4rem;
    padding-left: 0;
  }
`;

export const Search = styled.form`
  display: flex;
  flex: 1;
  align-items: center;

  background-color: #f3f3ff;
  border-radius: 5px;
  padding: 0.4rem 0.8rem;
  margin-right: 2.5rem;

  input {
    border: none;
    background-color: #f3f3ff;
    font-weight: 300;
    font-size: 15px;
    margin-left: 0.4rem;

    flex: 0;
  }
`;
