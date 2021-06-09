import React from 'react';
import { usePokemonData } from '../contexts/PokemonContext';

export const PokemonCard = () => {
  const pokemonData = usePokemonData();

  return (
    <div>
      {pokemonData.pokemon.map((pokemon, index) => {
        return <div key={index}>{pokemon.name}</div>;
      })}
    </div>
  );
};
