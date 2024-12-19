import {State, Team} from "../functional-core/types";
import {playRound} from "../functional-core/penalty-functions";

const states: State[] = []
const team1: Team = {
    id: 1,
    name: 'FC Metz',
    penalties: [],
}
const team2: Team = {
    id: 2,
    name: 'SC Marly',
    penalties: [],
}
let round: number = 0
const state: State = {
    round: round,
    teams: [team1, team2],
}

states.push(state);
playRound(states, round, 1, 2);