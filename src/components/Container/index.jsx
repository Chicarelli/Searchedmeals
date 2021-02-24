import React, { useState } from "react";
import * as S from "./styles";
import api from "../../services/api";

import ListItem from "../ListItem";



function Container() {
  const [list, setList] = useState([]);

  async function loadList() {
    await api.get().then((response) => {
      setList(response.data.meals);
      console.log(response.data.meals);
    });
  }

  return (
    <>
      <S.Container>
        <S.Form>
            <input type="text" placeholder="Type the ingredient" />
            <button>Search</button>
        </S.Form>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
      </S.Container>
    </>
  );
}

export default Container;
