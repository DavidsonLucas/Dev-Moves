import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:10px;
    img{
        border-radius:30px;
        width: 200px;
        height: 100%;
        &:hover{
        transform:scale(1.1);
        margin: 5px;
    }
    &:active{
        opacity: .1;
    }
    }

    h3{
        color: #ffffff;
    }
`