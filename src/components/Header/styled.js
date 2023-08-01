import styled from "styled-components"

export const  Header = styled.header`
      min-height:100px ;
      display: flex;
      padding:10px 3.5rem;
      position: fixed;
      top:0;
      z-index: 99;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      background-color: ${props => props.changeBackground ? '#000'  : 'transparent'};
      transition:background-color 0.6s ease-in-out;

      img{
            width: 25%;

            @media (max-width:1000px){
                  width: 26%;
            }
      }
`

export const Ul = styled.ul`
      display: flex;
    @media (max-width: 850px) {
            display: none;
      }
     
`
export const Li = styled.li`

          margin-left: 80px;
            font-weight: 600;
            position:relative;
            a{
         font-size:22px ;
         color:white;
        
     
        }
            &::after{
                  content: '';
                  height: 3px;
                  width:${props => props.isActive ? '100%' : 0};
                  background-color:#189b20;
                  position: absolute;
                  bottom: -10px;
                  left: 50%;
                  transform:translateX(-50%);
                  transition:width 0.5s ease-in-out;
            }

            &:hover::after{
                  width: 100%;
            }

       
           
`
