export type Team = {
    id: number;
    name: string;
    penalties: Penalty[];
}

export type Penalty = {
    isScored: boolean;
}

export type State = {
    round: number;
    teams: Team[];
}