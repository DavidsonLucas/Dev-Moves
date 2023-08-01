import styled, {keyframes} from "styled-components";

const scale = keyframes`
    from{
        transform: scale(0);
    }


    to{
        transform: scale(1);
    }
`

export const Background = styled.div`
    background-image: url(${(props)=> props.imagem});
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-position: center;
    background-size: cover;
        
    &::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: rgba(0, 0, 0, .5);

        }

        &::after{
        content:'';
        position: absolute;
        bottom:0;
        left: 0;
        width: 100%;
        height: 120px;
        background-image: linear-gradient(to top , #000 , rgba(0,0,0,0));
    } 
    

`
export const Container = styled.div`
    display: flex;
   justify-content: space-around;
   align-items: center;
   height: 100%;
   max-width: 1500px;
   margin-top: 5rem;

   @media (max-width:1000px){
    flex-direction:column;
    justify-content: center;
    align-items: center;
   }
   
   @media (max-width:850px){
   max-width: 50px;
    
   }
`
export const Info = styled.section`
    width: 50%;
    padding: 20px;
    z-index: 2;
   
        

    h1{
        font-size: 3.8rem;
        font-weight: 700;
        color: #ffffff;
    }
    p{
        width: 90%;
        font-size:20px;
        font-weight: 500;
        color: #ffffff;
        margin-top: 30px;
        margin-bottom: 25px;
        height: 100px;
        overflow-x: hidden;

        
        &::-webkit-scrollbar{
            background-color: #8c8c8c;
            width: 1px;
            height: 10em;
            border-radius: 30px;
            opacity: .2;
        }

    }
    @media (max-width:850px){
        margin-left: -20%;
        position: relative;
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;

        h1{
            font-size: 1.9rem;
            min-width:240px
        }
        p{
            min-width:300px;
            font-size:12px;
            margin-top: 12px;
        }

        #lind{
           margin-left:20px;
        }
    }

`
export const MainButton = styled.div`
        display: flex;
        gap: 20px;
        margin-top:30px;

        @media (max-width: 850px){
            margin-left: -60px;
            margin-top: -4px;

        }
`


export const Publi = styled.section`
         z-index: 1;
        width:30% ;
    img{
        width: 350px;
        border-radius: 30px;
        animation: ${scale} 0.5s linear;
        box-shadow: rgba(100, 100, 111, 0.23) 0px 7px 29px 0px;

        @media (max-Width:850px){
                width:235px;
               
                
        }
       
    }
    @media (max-Width:1000px){
            margin-left: -10%;
        }

        @media (max-Width:850px){
            margin-top: -420px;
            margin-left: -448%;
            
        }
`