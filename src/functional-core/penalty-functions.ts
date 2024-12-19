import {State} from "./types";
import {display} from "./tools";

export const isShootScored = (rdm: () => number): boolean => rdm() > 0.25;
export const getTeamScore = (state: State, teamId: number): number =>
    state.teams.find(t => t.id === teamId)?.penalties.reduce((acc, cur) => acc += cur.isScored ? 1 : 0, 0) ?? 0;

export const isTeamWon = (state: State, teamId1: number, teamId2: number): boolean => {
    if (getTeamScore(state, teamId1) === 5) return true;
    if (state.round <= 5 && getTeamScore(state, teamId1) - getTeamScore(state, teamId2) > 5 - state.round) return true;
    return false;
}

export const playTeamRound = (state: State, round: number, teamId: number): State => ({
    round,
    teams: state.teams.map(team =>
        team.id === teamId
            ? {
                ...team, penalties: [...team.penalties, {isScored: isShootScored(Math.random)}],
            }
            : team
    ),
});

export const playRound = (states: State[], round: number, teamId1: number, teamId2: number): void => {
    round++;
    states.push(playTeamRound(states[states.length - 1], round, teamId1));
    display(states);
    if (isTeamWon(states[states.length - 1], teamId1, teamId2)) return;
    states.push(playTeamRound(states[states.length - 1], round, teamId2));
    display(states);
    if (isTeamWon(states[states.length - 1], teamId2, teamId1)) return;
    return playRound(states, round, teamId1, teamId2);
}