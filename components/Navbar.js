import React from "react";
import FavoriteContext from "../contexts/Contexts";
const { useContext } = React;

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  console.log(favoritePokemons);
  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <div>
        <img src={imgUrl} alt="pokeapi-logo" className="navbar-image" />
      </div>
      <div>💖{favoritePokemons.length}</div>
    </nav>
  );
};
export default Navbar;
