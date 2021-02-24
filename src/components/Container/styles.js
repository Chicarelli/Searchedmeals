import styled from "styled-components";

export const Container = styled.div`
  background: #ffe6e6;
  min-height: calc(100vh - 70px);
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  height: 100px;
  margin: auto;
  min-width: 350px;
  padding-top: 15px;
  width: 50%;

  input {
    border: 2px solid red;
    border-radius: 7px;
    font-size: 1.2rem;
    height: max-content;
    margin: 10px;
    outline: none;
    padding: 10px;
    transition: 0.2s;
    width: 85%;

    &:hover {
      opacity: 0.7;
    }
  }

  button {
    background: #ff0000;
    border: 1px solid white;
    border-radius: 10px;
    color: #fafafa;
    cursor: pointer;
    font-size: 1.1rem;
    height: max-content;
    margin: 10px;
    outline: none;
    padding: 10px;
    transition: 0.3s;
    width: 9%;

    &:hover {
      opacity: 0.7;
    }
  }
`;
