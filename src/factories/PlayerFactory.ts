import { Player, POSITION } from '@src/interfaces';
import { shuffleArray } from '@src/utilities';

const positionOptions = [
  POSITION.DEF,
  POSITION.MID,
  POSITION.FWD,
  POSITION.RUC,
];

const player = (positions = 1): Player => ({
  name: Math.random().toString(36),
  price: Math.floor(Math.random() * (5001)) + 5000,
  positions: shuffleArray(positionOptions).slice(0, positions),
});

export default player;
