import { Router, Request, Response } from 'express';
import { Pokemon } from '../types/pokemon';

const router = Router();

/**
 * Extracts numeric value from a string like "0.71 m", "6.9 kg"
 */
function parseValue(value: string): number {
  return parseFloat(value.replace(/[^\d.]/g, ''));
}

router.post('/', (req: Request, res: Response) => {
  const body: Pokemon[] = req.body;

  if (!Array.isArray(body) || body.length !== 2) {
    return res.status(400).json({ error: 'Request must be an array of two Pokémon' });
  }

  const [pokemon1, pokemon2] = body;

  const height1 = parseValue(pokemon1.height);
  const height2 = parseValue(pokemon2.height);
  const weight1 = parseValue(pokemon1.weight);
  const weight2 = parseValue(pokemon2.weight);

  let hWinner: string | null = null;
  let wWinner: string | null = null;

  if (height1 > height2) hWinner = pokemon1.name;
  else if (height2 > height1) hWinner = pokemon2.name;

  if (weight1 > weight2) wWinner = pokemon1.name;
  else if (weight2 > weight1) wWinner = pokemon2.name;

  let result: string;

  if (hWinner === wWinner && hWinner !== null) {
    result = `${hWinner} wins by both height and weight. 🏆`;
  } else if (hWinner && wWinner && hWinner !== wWinner) {
    result = `Draw: ${hWinner} wins by height, ${wWinner} wins by weight. ⚖️`;
  } else {
    result = `It's a draw! 💥`;
  }

  return res.json({ result });
});

export default router;
