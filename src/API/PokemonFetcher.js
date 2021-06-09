import { useEffect } from 'react';
import {
  usePokemonData,
  useUpdatePokemonData,
} from '../contexts/PokemonContext';

export const Fetcher = () => {
  console.log('Attempting to fetch data...');
  const PokemonData = usePokemonData();
  const UpdatePokemonData = useUpdatePokemonData();

  const FetchData = async () => {
    const URL = 'https://pokeapi.co/api/v2/pokemon';
    const response = await fetch(URL);
    const data = await response.json();
    UpdatePokemonData({ loading: false, pokemon: data.results });
    console.log('Data fetched - ', PokemonData);
  };

  useEffect(() => {
    console.log('Firing useEffect on render');
    FetchData();
    console.log('New pokemon =', PokemonData);
  }, []);

  return <button onClick={FetchData}>Update Pokemon!</button>;
};
