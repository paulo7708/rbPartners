import styled from "styled-components";

export const LoaderStyle = styled.section`
  width: 100%;
  height: 100vh;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => props.theme["gray-800"]};
  display: flex;
  justify-content: center;
  align-items: center;

  svg{
  width: 100%;}
`


export const LoadingText = styled.section`
  width: 100%;
  font-weight: bold;
  color: #fff;
  transform: translate(.4rem);
  margin-top: 1rem;
`