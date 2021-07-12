import React from "react";

import  {Text2, Text3}  from "../Text/styles";
import * as S from "./styles";
import hacker from "../../assets/hacker.png"


const CardProfile = () => (
        <S.Container > 
            <S.Avatar>
            <img src={hacker} alt="hacker" height="96px" width="96px"/>
            </S.Avatar>
            <Text2>Hacker</Text2>
            <S.ContainerText>
            <S.TextLeft>Configurar Perfil</S.TextLeft>
            <S.TextLeft>Perfil Completo</S.TextLeft>
            </S.ContainerText>
        </S.Container>
    );

export default CardProfile;