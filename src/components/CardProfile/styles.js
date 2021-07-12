import styled from "styled-components";


export const Container = styled.div`
  width: 220px;
  height: 309px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.1);
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  border: solid 2px #2187FC;
  display: flex;
  contain: content;
  margin-bottom: 10px;
`;
export const TextLeft = styled.p`
    text-align: left;
    color: #4B4F56;
    font-size: 14px;
`;

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    color: #4B4F56;

`;