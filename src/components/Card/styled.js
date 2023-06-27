import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:10px;
   
    img{
        border-radius:30px;
        width: 250px;
        height: 100%;
        margin-left: 17px;
        &:hover{
        transform:scale(1.1);
        margin: 10px;
    }
    &:active{
        opacity: .1;
    }
    @media (max-width: 850px){
        width: 100px;
    }
    }

    h3{
        color: #ffffff;
    }
`