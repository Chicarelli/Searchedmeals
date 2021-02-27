import styled from "styled-components";

export const Container = styled.nav`
  align-items: center;
  background: #990000;
  display: flex;
  height: 70px;
  justify-content: center;
  width: 100%;

  h1 {
    color: #fafafa;
    font-family: Verdana;
    font-size: 2.4rem;
    letter-spacing: 0.5rem;
  }

  @media screen and (max-width: 530px){
    h1{
      letter-spacing: 0px;
      font-size: 2rem;
    }
  }

`;
