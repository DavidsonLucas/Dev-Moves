import styled , { css } from "styled-components";

const buttonstyle = css`
    border: 3px solid #ffffff;
    background:transparent;
    color :#FFFFFF;
    border-radius:30px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
    text-align:center;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        color: #ff0000;
        background: #FFFFFF;

    }

    @media (max-width:850px){
       font-size :10px ;
       min-width: 60%;
       height: 30px;
       font-weight: 400;
       
    }
`

export const ButtonWathi = styled.button`
    ${buttonstyle}
`
export const ButtonRed = styled.button`
    ${buttonstyle}
    background:#ff0000 ;
    border:4px solid transparent;
    box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

    &:hover{
        box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
        background: #ff0000;
        color: #ffffff;
    }

    
`

