import styled from 'styled-components';

export const Search = styled.form`
  display: flex;
  flex: 1;
  align-items: center;

  background-color: #f3f3ff;
  border-radius: ${props => props.theme.radius};
  padding: 0.4rem 0.8rem;
  margin-right: 2.5rem;

  input {
    border: none;
    background-color: #f3f3ff;
    font-weight: 300;
    font-size: 15px;
    margin-left: 0.4rem;

    flex: 1;
  }

  @media (min-width: 768px) {
    max-width: 316px;
    margin-left: auto;
  }
`;
