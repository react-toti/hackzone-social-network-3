import styled from "styled-components"

export const ContainerPai = styled.div` 
    width: 1200px;
    display: grid;
    grid-template-areas: 
    "avatar text ."
    "avatar . ."
    "avatar comentarios ."
    "avatar comentarios1 ."
    "avatar comentarios2 .";
    padding-left: 33px;
    padding-top: 47px;
`

export const ContainerDuvida = styled.div`
    display: grid;
    grid-template-areas: 
        "avatar  text"
        ".  botton";
    width: 782px;
    height: 143px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.1);
    align-items: center;
    padding: 20px 49px 14px 28px;
`;

export const Avatar = styled.div`
    grid-area: avatar;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    border: solid 2px #2187FC;
    display: flex;
    contain: content;
    margin-bottom: 10px;
    margin-right: 28px;
`;

export const TextArea = styled.textarea`
    grid-area: text;
    height: 49px;
    width: 600px;
    border-radius: 8px;
    border: 1px solid #C8C8C8;
    padding: 10px;
    font-size: 20px;
`

export const Button = styled.button`
    grid-area: botton;
    position: relative;
    left: 397px;
    font-size: 14px;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: #2187FC;
    text-align: center;
    width: 100%;
    max-width: 203px;
`;

export const ComentarioContainer = styled.div`
    display: grid;
    grid-template-areas: 
        "avatar nome . ."
        "texto texto texto texto"
        "pregunta pregunta pregunta ."
        "comentario like . .";
    width: 782px;
    height: 286px;
    box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.1);
    grid-area: comentarios;
    background-color: #fff;
    border-radius: 10px;
    padding: 21px 49px 26px 33px;
    align-items: center;
    margin-top: 42px;
`
export const AvatarSmall = styled(Avatar)`
    border: none;
    grid-area: avatar;
`

export const Texto = styled.p`
    font-size: 16px;
    color: #4B4F56;
    grid-area: nome;
    padding: 24px 0 14px 0;
`

export const ContainerPregunta = styled.div`
    grid-area: texto;
    background-color: #C8C8C8;
    border-radius: 8px;
    width: 700px;
    height: 123px;
    padding: 18px 22px;
    font-size: 20px;
`
export const Pregunta = styled(Texto)` 
    grid-area: pregunta;
`

export const Like = styled(Texto)` 
    grid-area: like;
    font-size: 14px;
    padding: 0;
` 
export const Comentario = styled(Texto)` 
grid-area: comentario;
padding: 0;
` 

export const ComentarioContainer1 = styled(ComentarioContainer)`
    grid-area: comentarios1;
`

export const ComentarioContainer2 = styled(ComentarioContainer)`
    grid-area: comentarios2;
`

export const AvatarHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 25px;
    right: 90px;
    padding-right: 20px;
    
`