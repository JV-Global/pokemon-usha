import React, { useState } from 'react';
import { Pokemon } from './types/pokemon';
import pokemons from './data/pokemons.json';
import PokemonSelector from './components/PokemonSelector';
import PokemonCard from './components/PokemonCard';
import { battlePokemon } from './utils/api';
import './App.css';

const App: React.FC = () => {
  const [firstId, setFirstId] = useState<number | ''>('');
  const [secondId, setSecondId] = useState<number | ''>('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const firstPokemon = pokemons.find((p) => p.id === firstId);
  const secondPokemon = pokemons.find((p) => p.id === secondId);

  const handleBattle = async () => {
    if (!firstPokemon || !secondPokemon) return;

    try {
      setResult('');
      setError('');
      const winner = await battlePokemon(firstPokemon, secondPokemon);
      setResult(winner);
    } catch (err) {
      console.error(err);
      setError('Failed to call battle API.');
    }
  };

  return (
    <div className="App">
      <h1>⭐ Pokémon Battle Arena</h1>

      <div className="selectors">
        <PokemonSelector
          label="Trainer One"
          pokemons={pokemons}
          selectedId={firstId}
          onChange={setFirstId}
        />
        <PokemonSelector
          label="Trainer Two"
          pokemons={pokemons}
          selectedId={secondId}
          onChange={setSecondId}
        />
      </div>

      <div className="pokemon-display">
        {firstPokemon && <PokemonCard pokemon={firstPokemon} />}
        {secondPokemon && <PokemonCard pokemon={secondPokemon} />}
      </div>

      <button onClick={handleBattle} disabled={!firstPokemon || !secondPokemon}>
        🔥 BATTLE!
      </button>

      {result && <h2 className="result">🏆 {result}</h2>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default App;
