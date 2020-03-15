import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  cursor: pointer;

  p {
    font-weight: bold;
  }

  div {
    display: flex;
  }

  &:hover line {
    stroke: ${props => props.theme.colors.lightBlue};
  }
`;

export const FileLabel = styled.span`
  border: 2px solid ${props => props.theme.colors.darkBlue};
  font-weight: 300;
  margin: 0.25rem 0 0.5rem;
  padding: 0 1rem;
  height: 29px;
  width: 100%;

  display: flex;
  align-items: center;
`;

export const AddButtom = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.colors.darkBlue};
  border: none;
  height: 29px;
  width: 29px;
  margin-top: 0.25rem;
  pointer-events: none;
`;

export const Input = styled.input`
  display: none;
`;
