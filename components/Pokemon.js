import React, { useContext } from "react";
import FavoriteContext from "../contexts/Contexts";
const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } = useContext(
    FavoriteContext
  );
  const clickHeart = (event) => {
    event.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };
  const redheart = "💖";
  const blueheart = "💙";
  const heart = favoritePokemons.includes(pokemon.name) ? redheart : blueheart;
  return (
    <div className="pokemon-card">
      <div className="pokemon-img-container">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, i) => {
              return (
                <div className="pokemon-type-text" key={i}>
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <button onClick={clickHeart}>
            {" "}
            <div className="pokemon-symbol">{heart}</div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Pokemon;
