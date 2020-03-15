import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${props => props.theme.colors.whiteGradient};
  height: 100vh;
  width: 100%;
  text-align: left;
  padding: 50% 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  max-width: 576px;

  /* Shadow */
  -webkit-box-shadow: -10px 0px 30px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: -10px 0px 30px 0px rgba(0, 0, 0, 0.2);
  box-shadow: -10px 0px 30px 0px rgba(0, 0, 0, 0.2);

  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(200%)')};

  button,
  a {
    background-color: orange;
    flex: 1;

    font-size: 20px;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${props => props.theme.colors.lightBlue};
    text-decoration: none;
    transition: color 0.3s linear;
    text-align: right;
    border: none;
    background-color: transparent;

    &:hover {
      color: ${props => props.theme.colors.darkBlue};
    }

    &.active {
      color: ${props => props.theme.colors.darkBlue};

      &:hover {
        opacity: 0.7;
      }
    }
  }

  a {
    margin-left: auto;

    button {
      padding: 0;
    }
  }
`;
