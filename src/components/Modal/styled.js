import styled from "styled-components";
import { BiXCircle } from 'react-icons/bi'


export const Container = styled.div`
         height:100vh;
        width: 100vw;
        z-index: 999;
        background-color: rgba(0,0,0,.7);
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;

       
          
        
`



export const Modal = styled.div`
        width: 60%;
        background: #000;
        position: fixed;
        display:flex;
        justify-content: center;
        align-items: center;
        padding:50px;
        max-width: 1200px;
        flex-direction: column;
        gap: 20px;
       
        iframe{
                border: none;
        }
        
        @media (max-width: 850px){
        width:auto ;

        iframe{
         width:392px ;
         margin-left:207;
        }    
        }
`

export const Fechar = styled(BiXCircle)`
        background-color: white;
        margin-left:49rem ;
        margin-top: 30px;
        cursor: pointer;
        font-size: 20px;
`