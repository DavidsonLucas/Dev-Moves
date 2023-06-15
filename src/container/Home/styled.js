import styled from "styled-components";

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

`
export const Container = styled.div`
    display: flex;
   justify-content: space-around;
   align-items: center;
   height: 100%;
   max-width: 1500px;
   margin-top: 5rem;
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

`
export const MainButton = styled.div`
        display: flex;
        gap: 20px;
        margin-top:30px;
`


export const Publi = styled.section`
         z-index: 1;
        width:30% ;
    img{
        width: 350px;
        border-radius: 30px;
    }

`