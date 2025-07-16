import React from 'react';
import { Pokemon } from '../types/pokemon';

interface SelectorProps {
  label: string;
  pokemons: Pokemon[];
  selectedId: number | '';
  onChange: (id: number) => void;
}

const PokemonSelector: React.FC<SelectorProps> = ({ label, pokemons, selectedId, onChange }) => {
  return (
    <div>
      <h3>{label}</h3>
      <select value={selectedId} onChange={(e) => onChange(Number(e.target.value))}>
        <option value="">Select Pokémon</option>
        {pokemons.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PokemonSelector;
