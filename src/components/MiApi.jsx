import React from "react";
import { useState, useEffect } from "react";
import Buscador from "./Buscador";
import PokemonList from "./PokemonList";
import Button from "react-bootstrap/Button";

const MiApi = () => {
  //state para almacenar el fetch
  const [pokemonList, setPokemonList] = useState([]);
  const [valueBuscador, setValueBuscador] = useState("");

  //fetch
  const getHoennPokemon = async () => {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=135&offset=251"
    );
    const pokeList = await res.json();

    if (pokeList && pokeList.results) {
      const fullPokeDetails = await Promise.all(
        pokeList.results.map(async (element) => {
          return await fetchPokemonData(element);
        })
      );
      setPokemonList(fullPokeDetails);
    }
  };

  const fetchPokemonData = async (pokemon) => {
    const url = pokemon.url;
    const res = await fetch(url);
    const pokeData = await res.json();
    return pokeData;
  };

  useEffect(() => {
    getHoennPokemon();
  }, []);

  const handleButtonOrdenarPorID = () => {
    const ordenarPorID = pokemonList.sort((a, b) => a.id - b.id);
    setPokemonList([...ordenarPorID]);
  };

  const handleButtonOrdenarPorNombre = () => {
    const ordenarPorNombre = pokemonList.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setPokemonList([...ordenarPorNombre]);
  };

  return (
    <>
      <Buscador
        valueBuscador={valueBuscador}
        setValueBuscador={setValueBuscador}
      />
      <div className="grupo-botones">
        <Button variant="primary" onClick={handleButtonOrdenarPorID}>
          Ordenar por ID
        </Button>
        <Button variant="secondary" onClick={handleButtonOrdenarPorNombre}>
          Ordenar por Nombre
        </Button>
      </div>
      <PokemonList pokemonList={pokemonList} valueBuscador={valueBuscador} />
    </>
  );
};

export default MiApi;
