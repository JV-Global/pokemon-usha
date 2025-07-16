import { Pokemon } from '../types/pokemon';

export const battlePokemon = async (
  pokemon1: Pokemon,
  pokemon2: Pokemon
): Promise<string> => {
  const response = await fetch('http://localhost:3000/battle', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify([pokemon1, pokemon2]),
  });

  if (!response.ok) {
    throw new Error('Battle API request failed');
  }

  const data = await response.json();
  return data.result;
};
