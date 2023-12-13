import React from 'react'
import Card from "react-bootstrap/Card";

const PokemonList = ({pokemonList, valueBuscador}) => {
  return (
    <div className="pokemon-list">
        {pokemonList &&
          pokemonList
            .filter((pkmn) =>
              pkmn.name.toLowerCase().includes(valueBuscador.toLowerCase())
            )
            .map((pokemon) => {
              return (
                <Card key={pokemon.name} style={{ width: "14rem" }}>
                  <Card.Img
                    variant="bottom"
                    src={
                      pokemon.sprites.other["official-artwork"].front_default
                    }
                  />
                  <Card.Body>
                    <Card.Title>{pokemon.name}</Card.Title>
                  </Card.Body>
                </Card>
              );
            })}
      </div>
  )
}

export default PokemonList