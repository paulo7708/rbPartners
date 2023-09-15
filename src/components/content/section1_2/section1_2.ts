import styled from "styled-components";

export const StyledSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 10rem;
  width: 100%;
  height: 80vh;
  z-index: 2;

  

  img {
    object-position: top;
    width: 50%;
    object-fit: cover;
  }   

  @media (min-width: 1441px) {
    /* margin-bottom: -12.15rem; */
  }  

  @media (max-width: 1440px) {
    /* margin-bottom: -9.8rem; */
  }

  

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
    margin: 0 0 0.2rem 0;    

    img {
      width: auto;
      height: 35%;
      object-position: top;
    }
  }
  
  div{
    display: flex;
    justify-content: center;
    flex-direction: column;    
    gap: 1rem;
    max-width: 75%;
    height: 100%;
    /* box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -35px; */
    padding: 0 4rem;
    
    
    @media (max-width: 800px) {
      width: 80%;
      padding: 1rem 0;
      margin: 01rem 0 1rem 3rem;

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
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      color: ${props => props.theme['gray-600']};
      opacity: 0.9;

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
  
`