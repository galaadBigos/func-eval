import {State} from "./types";
import {getTeamScore} from "./penalty-functions";

export const display = (states: State[]) => {
    const currentState: State = states[states.length - 1];
    const lastState: State = states[states.length - 2];
    console.log(`Tour ${currentState.round} : Score : ${getTeamScore(currentState, currentState.teams[0].id)}/${getTeamScore(currentState, currentState.teams[1].id)} (${currentState.teams[0].name} : ${getTeamScore(lastState, currentState.teams[0].id) !== getTeamScore(currentState, currentState.teams[0].id) ? "+1" : "0"} ) (${currentState.teams[1].name} : ${getTeamScore(lastState, currentState.teams[1].id) !== getTeamScore(currentState, currentState.teams[1].id) ? "+1" : "0"} )`);
}