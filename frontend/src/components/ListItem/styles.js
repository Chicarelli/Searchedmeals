import styled from "styled-components";

export const Container = styled.section`
  align-items: center;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 2px 2px 5px 5px rgba(200, 200, 200, 1);
  -webkit-box-shadow: 2px 2px 5px 5px rgba(200, 200, 200, 1);
  -moz-box-shadow: 2px 2px 5px 5px rgba(200, 200, 200, 1);
  display: flex;
  flex-direction: column;
  margin: 30px auto 30px;
  width: 70%;

  h3 {
    font-family: Cambria;
    font-size: 1.6rem;
    letter-spacing: 0.2rem;
    margin-top: 10px;
    text-align: center;
  }

  @media screen and (max-width: 1000px){
    width: 90%;
  }
`;

export const Subtitle = styled.section`
  span {
    font-family: Cambria;
    font-size: 1.1rem;
    font-weight: 400;
    font-style: italic;
    padding: 4px 4px 1px 4px;
  }
`;

export const Description = styled.section`
  display: flex;
  margin: auto;
  margin-top: 5px;
  margin-bottom: 10px;
  width: 93%;

  img {
    background-position: center center;
    background: no-repeat;
    height: 150px;
    margin-top: 8px;
    margin-right: 15px;
    margin-bottom: 4px;
    align-self: center;
  }

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

export const Text = styled.section`
  display: flex;
  flex-direction: column;

  p {
    font-family: Cambria;
    font-size: 1rem;
    margin-bottom: 4px;
    text-align: justify;
    transition: 2s;
    width: 100%;
  }
`;
