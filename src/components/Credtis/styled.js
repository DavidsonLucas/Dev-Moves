import styled from "styled-components";



export const Container = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 30px;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap:10px;  
    }

    img{
        width: 200px;
    }

    @media (max-width:850px){
        img{
            width: 64px;
        }
    }

`

export const Titulo = styled.h4`
    font-size: 28px;
    font-weight: 700;
`



