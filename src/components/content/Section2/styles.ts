import styled from 'styled-components';

export const HexTitles = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  color: ${props => props.theme['white']};
  opacity: 0.9;
  

  h1 {
    font-size: 1.8rem;
  }

  h2 {
    font-size: 1.3rem;
    font-family: 'Oldenburg', cursive;
  }
  @media (max-width: 768px) {
    display: none;
  }
  p {
    font-size: 1rem;
    max-width: 55rem;
  }
  span{
    color: ${props => props.theme['blue-500']};
  }
`
// export const BackHexagon = styled.div`
//   background-image:  url(${hexagon});
//   background-repeat: no-repeat;
//   background-size: 10%;
//   background-position: initial;
//   min-width:100%;
//   position: absolute;

// `
export const FirstSection2 = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 6rem;
  height:50vh;
  
  @media (max-width: 1280px) {
  }

  @media (max-width: 768px) {
    display: none;
  }
 
  

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 25%;
    gap: 1rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    padding: 2rem;
    border-radius: 10px;
    
    h1 {
      font-size: 1.3rem;
      color: ${props => props.theme['white']};
    }
    h2{
      font-family: 'Oldenburg', cursive;
      color: ${props => props.theme['white']};
    }
    h3 {
      font-size: 1rem;
    }
    p{
      font-size: 0.8rem
    }

    
  }
  
  img {
    display: flex;
    align-items: center;
    justify-content: center;    
    background-color: transparent;
    width: 7rem;
    height: 7rem;
    transition: all .2s ease-in-out; 

    &:hover { 
      transform: scale(1.1);      
    }
  }
  
  h2{
      color: ${props => props.theme['gray-600']};
      opacity: 0.9;
      font-size: 2.1rem;
      font-size: 1.5rem;
    }
    span{
      color: ${props => props.theme['blue-500']};
    }

    p{
      color: ${props => props.theme['gray-500']};
      font-weight: bold;
      opacity: 0.9;
    }
  
`