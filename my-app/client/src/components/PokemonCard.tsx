import React from 'react';
import { Pokemon } from '../types/pokemon';

interface Props {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  return (
    <div style={{ textAlign: 'center', margin: '10px' }}>
      <img src={pokemon.img} alt={pokemon.name} width={100} />
      <p>
        <strong>{pokemon.name}</strong><br />
        Height: {pokemon.height}, Weight: {pokemon.weight}
      </p>
    </div>
  );
};

export default PokemonCard;
