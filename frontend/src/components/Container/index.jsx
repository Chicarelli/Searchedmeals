import React, { useState } from "react";
import * as S from "./styles";
import api from "../../services/api";
import dataBase from '../../services/dataBase';

import ListItem from "../ListItem";

function Container() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    //form verification
    e.preventDefault();
    if (name.replace(/\s/, "") === "") {
      //if its not empty
    } else {
      loadList();
    }
  }

  async function loadList() {
    await api.get(`/search.php?s=${name}`).then((response) => {
      if (response.data.meals == null) {
        alert("Não encontrado!");
      } else {
        setList(response.data.meals);
        savingSearch();
      }
    });
  }

  async function savingSearch() {
    await dataBase.post('/searchs', {
      "search" : name
    });
  }

  return (
    <>
      <S.Container>
        <S.Form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type the ingredient"
          />
          <button type="submit">Search</button>
        </S.Form>
        {list.map((ls) => (
          <ListItem
            key={ls.idMeal}
            name={ls.strMeal}
            category={ls.strCategory}
            area={ls.strArea}
            instructions={ls.strInstructions}
            thumbnail={ls.strMealThumb}
          />
        ))}
      </S.Container>
    </>
  );
}

export default Container;
