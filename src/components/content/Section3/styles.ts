import styled from 'styled-components';

export const Style3 = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  min-width: 100%;
  height: 70vh;
  
  @media (max-width: 768px) {
    display: none;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 22%;
    height: 15rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    border-radius: 5px;
    border: 1px solid #fff;
    padding: 2rem 1rem;
    background-color: ${props => props.theme['gray-500']};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    transition: all .2s ease-in-out; 

    &:hover { 
      transform: scale(1.2);      
    }
  }
  
  h2{
      color: ${props => props.theme['gray-100']};
      opacity: 0.9;
      font-size: 2.1rem;
      font-size: 1.5rem;
      font-family: 'Roboto', sans-serif;
    }
    span{
      color: ${props => props.theme['blue-500']};
    }

    p{
      color: ${props => props.theme['gray-100']};
      font-weight: bold;
      opacity: 0.9;
    }
  
`