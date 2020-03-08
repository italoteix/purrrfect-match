// Menu.styled.js
import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--white-gradient);
  height: 100vh;
  width: 100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(200%)')};

  a {
    font-size: 20px;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: var(--light-blue);
    text-decoration: none;
    transition: color 0.3s linear;
    text-align: right;

    &:hover {
      color: var(--dark-blue);
    }
  }
`;
