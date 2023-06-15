import styled from "styled-components";

export const Background0 = styled.div`
   background-color: #000000;
   height: 60vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-position: center;
    background-size: cover;
`
export const Background = styled.div`
    background-image: url(${(props)=> props.imagem});
    height: 50vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-position: center;
    background-size: cover;
    background-color: #000000;
    z-index: 2;
    

        
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
export const Publi = styled.section`
         z-index: 2;
        width:30% ;
    img{
        width: 350px;
        border-radius: 30px;
    }

`
export const Container = styled.div`
    display: flex;
   justify-content: space-between;
   align-items: center;
   height: 100%;
   max-width: 1500px;
   position: relative;
   top: -2rem;
   gap:12px;
`

export const Info = styled.section`
    position: relative;
    top:-1rem ;
    padding: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 19px;

    h1{
        font-size: 3.8rem;
        font-weight: 700;
        color: #ffffff;
    }
    p{
        width: 55%;
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
export const Info_Button = styled.div`
    display: flex;
    gap: 30px;
`
