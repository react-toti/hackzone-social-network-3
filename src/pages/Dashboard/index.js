/* eslint-disable */
import  React  from "react";

import  CardProfile  from "../../components/CardProfile";
import * as S from "./styles"
import hacker from "../../assets/hacker.png"

const Dashboard = () =>{
    return(
    <>
    <S.AvatarHeader>
        <S.Avatar>
        <img src={hacker} alt="hacker" height="55px" width="55px"/>
        </S.Avatar>
        <S.Like>El Papa De Los Helados</S.Like>
    </S.AvatarHeader>
    <S.ContainerPai>
        <CardProfile /> 
        <S.ContainerDuvida>
            <S.Avatar>
                <img src={hacker} alt="hacker" height="55px" width="55px"/>
            </S.Avatar>
            <S.TextArea placeholder="Qual é a sua duvida hoje?"/>
            <S.Button >
                Publicar
            </S.Button>
        </S.ContainerDuvida>
        <S.ComentarioContainer>
            <S.AvatarSmall>
            <img src={hacker} alt="hacker" height="55px" width="55px"/>
            </S.AvatarSmall>
            <S.Texto>El Papa De Los Helados</S.Texto>
            <S.ContainerPregunta>
                <h6>aqui va una cosa tipo pregunta o que se yo!</h6>
            </S.ContainerPregunta>
            <S.Pregunta>que mas puedo hacer???</S.Pregunta>
            <S.Comentario>20</S.Comentario>
            <S.Like>5</S.Like>
        </S.ComentarioContainer>
        <S.ComentarioContainer1>
            <S.AvatarSmall>
            <img src={hacker} alt="hacker" height="55px" width="55px"/>
            </S.AvatarSmall>
            <S.Texto>El Papa De Los Helados</S.Texto>
            <S.ContainerPregunta>
                <h6>aqui va una cosa tipo pregunta o que se yo!!!</h6>
            </S.ContainerPregunta>
            <S.Pregunta>que mas puedo hacer???</S.Pregunta>
            <S.Comentario>20</S.Comentario>
            <S.Like>5</S.Like>
        </S.ComentarioContainer1>
        <S.ComentarioContainer2>
            <S.AvatarSmall>
            <img src={hacker} alt="hacker" height="55px" width="55px"/>
            </S.AvatarSmall>
            <S.Texto>El Papa De Los Helados</S.Texto>
            <S.ContainerPregunta>
                <h6>aqui va una cosa tipo pregunta o que se yo!</h6>
            </S.ContainerPregunta>
            <S.Pregunta>que mas puedo hacer???</S.Pregunta>
            <S.Comentario>20</S.Comentario>
            <S.Like>5</S.Like>
        </S.ComentarioContainer2>
    </S.ContainerPai>
    </>
    )}
        

export default Dashboard;