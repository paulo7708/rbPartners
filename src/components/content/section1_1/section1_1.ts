import styled from "styled-components";
import imgRight from '../../../assets/quadrado1.png'

export const VideoSection = styled.div`
  /* box-shadow: 10px 10px 50px -20px #202024; */
  display: flex;
  width: 100%;
  

  @media (min-width: 801px) {
  height: 80vh;
  }
    

  img {
    object-position: top;
    width: 50%;
    object-fit: cover;
    border-radius: 100px 0 0 100px;
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    img{
      width: 100%;
      height: 15rem;
      object-position: top;
    }
  }   

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    
    gap: 1rem;
    max-width: 75%;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -35px;
    border-radius: 10px;
    margin: 0 5rem;

    @media (max-width: 800px) {
      
      width: 100%;
      padding: 1rem 0;
      margin: 1rem 3rem;

      h1 {
        font-size: 0.8rem;
      }
      h3 {
        font-size: 1.2rem;
      }
      p {
        font-size: 0.8rem;
      }
      
    }

    h1{
      font-size: 2.3rem;
      color: ${props => props.theme['gray-600']};
      opacity: 0.9;
      font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

      @media (max-width: 800px) {
        font-size: 1.5rem;
      }
    }
    span{
      color: ${props => props.theme['blue-500']};
    }
    h3 {
      font-family: Eras;
      color: ${props => props.theme['gray-400']};
    }

    p{
      color: ${props => props.theme['gray-500']};
      font-weight: bold;
      opacity: 0.9;
    }

    a{
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      gap: 0.5rem;
      width: 12rem;
      height: 3rem;
      border: 1px solid ${props => props.theme['green-100']};;
      border-radius: 30px;
      color: ${props => props.theme['green-100']};;
      font-weight: bold;
      font-size:1.1rem;
      background-color: transparent;
      opacity: 0.9;
      transition: all 0.2s ease-in-out;

      &:hover { 
          transform: scale(1.1);
          color: ${props => props.theme['green-400']};     
          border-color: ${props => props.theme['green-400']};     
        }

      @media (max-width: 800px) {
        font-size: 0.8rem;
        height: 2rem;
        width: 8rem;
      }
    }
  }
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 80%;
    padding: 8rem;
    gap: 2rem;

    background-image: url(${imgRight});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    

    @media (max-width: 768px) {
    display: none;
  }} */
  
`