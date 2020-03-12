export interface Player {
    name: string;
    price: number;
    positions: POSITION[];
}

export enum POSITION {
    DEF = 'DEF',
    MID = 'MID',
    FWD = 'FWD',
    RUC = 'RUC',
}

type Defender = Player
type Midfielder = Player
type Forward = Player
type Ruck = Player

export type PlayerPool = Player[]


export interface LineUp {
    d1: Defender;
    d2: Defender;
    d3: Defender;
    m1: Midfielder;
    m2: Midfielder;
    m3: Midfielder;
    m4: Midfielder;
    f1: Forward;
    f2: Forward;
    f3: Forward;
    r: Ruck;
}
