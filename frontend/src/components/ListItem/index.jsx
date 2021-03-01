import React from "react";
import * as S from "./styles";

function ListItem({ name, category, area, instructions, thumbnail }) {
  const newInstructions = instructions.split("\r\n");
  return (
    <>
      <S.Container>
        <h3>{name}</h3>
        <S.Subtitle>
          <span>{category}</span>
          <span>-</span>
          <span>{area}</span>
        </S.Subtitle>
        <S.Description>
          <img src={thumbnail} alt="" />
          <S.Text>
          {
            newInstructions.map((item, index) => (
              <p key={index}>{item}</p>
            ))
          }
          </S.Text>
        </S.Description>
      </S.Container>
    </>
  );
}

export default ListItem;
