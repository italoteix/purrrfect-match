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
    background: var(--white-gradient);
    border-radius: 5px;
  }

  aside {
    display: none;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 44px 1fr;
    grid-template-areas: 'h h' 'a m';
    row-gap: 1.5rem;
    column-gap: 1rem;

    padding: 1.5rem 2.5rem;

    header {
      margin: 0;
      padding: 0;
      justify-content: flex-start;
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
      border-radius: 5px;

      img {
        height: 100%;
        max-height: 83vh;
        width: auto;
        border-radius: 5px;
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

export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;

  border-radius: 5px;
  padding: 1rem;
  max-width: 400px;
  margin: 0 auto;

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

  fieldset {
    margin-bottom: 2rem;
    border: none;
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

      &:hover line {
        stroke: var(--light-blue);
      }
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
    color: var(--white);
    min-height: 44px;
    margin: 0 10.5%;
    max-width: 316px;
    text-transform: uppercase;

    svg {
      margin-left: 0.5rem;
    }

    &:hover {
      background: var(--dark-blue);
    }
  }

  @media (min-width: 768px) {
    fieldset {
      margin-bottom: 1rem;
    }
  }
`;
