import React from "react";
import { findPokemon } from "../api";
const { useState } = React;

const Searchbar = (event) => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();
  const onChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };
  const onClick = async () => {
    const data = await findPokemon(search);
    setPokemon(data);
  };
  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar Pokemon" onChange={onChange} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClick}>buscar</button>
      </div>
    </div>
  );
};
export default Searchbar;
