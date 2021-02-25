import React from "react";
import * as S from "./styles";

function ListItem({name, category, area, instructions, thumbnail}) {
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
          <p dangerouslySetInnerHTML={{ __html: instructions }}></p>
        </S.Description>
      </S.Container>
    </>
  );
}

export default ListItem;
