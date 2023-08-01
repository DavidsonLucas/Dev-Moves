import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:10px;
    img{
        border-radius:30px;
        width: 160px;
        height: 100%;
        &:hover{
        transform:scale(1.1);
        margin: 5px;
    }
    @media (max-width:850px){
        width: 150px;
    }
    &:active{
        opacity: .1;
    }
    }

    h3{
        color: #ffffff;
    }
`