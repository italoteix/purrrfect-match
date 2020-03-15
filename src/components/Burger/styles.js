import styled from 'styled-components';

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  position: absolute;
  top: 2.2rem;
  right: 1rem;
  width: ${props => props.theme.sizes.lg};
  height: ${props => props.theme.sizes.lg};
  background: transparent;
  border: none;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: ${props => props.theme.sizes.lg};
    height: 0.25rem;
    background: ${({ open, theme }) =>
      open ? theme.colors.darkBlue : theme.colors.white};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
