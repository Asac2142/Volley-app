import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TournametService {

  private tournamets: {team1: string, score: string[], team2: string, winner: string}[] = [];

  constructor() { }

  public getTournaments(): {team1: string, score: string[], team2: string, winner: string}[] {
    return this.tournamets;
  }

  public getLastTournament(): {team1: string, score: string[], team2: string, winner: string} {
    return this.tournamets[this.tournamets.length - 1];
  }

  public setMatch(team1: string, team2: string): void {
    const match = {
      team1,
      score: ['0/0', '0/0', '0/0', '0/0', '0/0'],
      team2,
      winner: ''
    }
    this.tournamets.push(match);
  }

  public setLastTournament(match: {team1: string, score: string[], team2: string, winner: string}): void {
    this.tournamets[this.tournamets.length - 1] = match;
  }
}
