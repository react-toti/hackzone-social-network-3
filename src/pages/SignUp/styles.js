import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 36px 70px;
  justify-content: space-between;
`;

export const PhrasesContainer = styled.div`
  max-width: 640px;
`;

export const FormContainer = styled.form`
  box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 53px 30px;
  background-color: ${({ theme }) => theme.white};
  width: 100%;
  max-width: 470px;
  display: flex;
  flex-direction: column;
  align-items: center;

  hr {
    width: 100%;
    border: 0;
    border-top: 1px solid ${({ theme }) => theme.lightGrey};
    margin-top: 24px;
    margin-bottom: 32px;
  }

  small {
    margin-top: 32px;
  }
`;
