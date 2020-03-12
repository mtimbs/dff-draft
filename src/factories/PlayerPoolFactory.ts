import { PlayerPool } from '@src/interfaces';
import PlayerFactory from '@factories/PlayerFactory';


const playerPool = (size = 100, dpp = 10): PlayerPool => [
  ...[...Array(size - dpp)].map(() => PlayerFactory()),
  ...[...Array(dpp)].map(() => PlayerFactory(2)),
];

export default playerPool;
