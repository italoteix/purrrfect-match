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
`;

export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;

  background: var(--white-gradient);
  border-radius: 5px;
  padding: 1rem;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 29px;

    margin: 1rem 0;
    text-transform: uppercase;
  }

  h3 {
    font-style: italic;
    font-weight: bold;
    font-size: 20px;
    line-height: 19px;

    margin-bottom: 0.5rem;
  }

  label {
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 13px;
  }

  input {
    width: 100%;
    margin: 0.25rem 0 0.5rem;
    border: 2px solid var(--dark-blue);
    height: 29px;
  }

  section {
    margin-bottom: 2rem;
  }

  span {
    display: flex;

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: var(--dark-blue);
      border: none;
      height: 29px;
      width: 29px;
      margin-top: 0.25rem;
    }
  }

  button[type='submit'] {
    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(
      12.07deg,
      #7372f2 30.28%,
      rgba(115, 114, 242, 0) 341.44%
    );
    border: none;
    border-radius: 5px;
    color: var(--white);
    height: 44px;
    max-width: 316px;
    text-transform: uppercase;

    svg {
      margin-left: 0.5rem;
    }
  }
`;
