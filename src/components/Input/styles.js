import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  input {
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.lightGrey};
    padding: 19px 20px;
    width: 100%;
    max-width: 470px;
    margin-top: 16px;

    ::placeholder {
      font-size: 16px;
      border: none;
      color: ${({ theme }) => theme.lightGrey};
    }
  }
`;

export const ErrorMessage = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.error};
  margin-top: 5px;
`;
