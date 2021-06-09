import React, { useState, useContext } from 'react';

const PokemonContext = React.createContext();
const UpdatePokemonContext = React.createContext();

export function usePokemonData() {
  return useContext(PokemonContext);
}

export function useUpdatePokemonData() {
  return useContext(UpdatePokemonContext);
}

export const PokemonProvider = ({ children }) => {
  const [pokemonData, setPokemonData] = useState({
    loading: true,
    pokemon: [],
  });

  function UpdatePokemonData(args) {
    console.log('Firing UpdatePokemonData from Context.js');
    setPokemonData(args);
  }

  return (
    <PokemonContext.Provider value={pokemonData}>
      <UpdatePokemonContext.Provider value={UpdatePokemonData}>
        {children}
      </UpdatePokemonContext.Provider>
    </PokemonContext.Provider>
  );
};
