import './App.css';
import { PokemonProvider } from './contexts/PokemonContext';
import { PokemonCard } from './components/PokemonCard';
import { Fetcher } from './API/PokemonFetcher';

function App() {
  return (
    <PokemonProvider>
      <h1>Pokemon API Rolodex</h1>
      <Fetcher />
      <PokemonCard />
    </PokemonProvider>
  );
}

export default App;
