import styled from 'styled-components';

export const Container = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;

  border-radius: ${props => props.theme.radius};
  padding: 1rem;
  max-width: 400px;
  margin: 0 auto;

  h1 {
    margin: 1rem 0;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  fieldset {
    margin-bottom: 2rem;
    border: none;
  }

  @media (min-width: 768px) {
    fieldset {
      margin-bottom: 1rem;
    }
  }
`;

export const Submit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    12.07deg,
    #7372f2 30.28%,
    rgba(115, 114, 242, 0) 341.44%
  );
  border: none;
  color: ${props => props.theme.colors.white};
  min-height: 44px;
  margin: 0 10.5%;
  max-width: 316px;
  text-transform: uppercase;

  svg {
    margin-left: 0.5rem;
  }

  &:hover {
    background: ${props => props.theme.colors.darkBlue};
  }
`;
