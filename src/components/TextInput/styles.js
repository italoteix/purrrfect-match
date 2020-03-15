import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  font-weight: bold;
`;

export const Input = styled.input`
  border: 2px solid ${props => props.theme.colors.darkBlue};
  font-weight: 300;
  margin: 0.25rem 0 0.5rem;
  padding: 0 1rem;
  height: 29px;
  width: 100%;
`;

export const ErrorMessage = styled.p`
  display: inline;
  color: ${props => props.theme.colors.danger};
  margin-left: auto;
`;
