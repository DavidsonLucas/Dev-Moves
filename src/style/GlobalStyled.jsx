import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    body{
        background-color: black;
        text-decoration: none;
        outline: none;
        list-style: none;
       overflow-x: hidden;
       overflow-y: hidden;

       
        overflow-y: auto;
   
       &::-webkit-scrollbar {
           width:5px;            /* width of the entire scrollbar */
        }
        &::-webkit-scrollbar-track {
          background:black;        /* color of the tracking area */
        }

        &::-webkit-scrollbar-thumb {
        background-color: #e0e0e0;    /* color of the scroll thumb */
        border-radius: 30px;    
        height:40px;   /* roundness of the scroll thumb */
        }   
    
        li{
            list-style: none;
        }

        a{
            text-decoration: none;
        }
    }
        
    
`
export default Global