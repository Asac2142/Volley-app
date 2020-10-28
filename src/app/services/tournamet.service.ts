import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TournametService {

  private tournamets: Object[] = [];

  constructor() { }

  public getTournaments(): Object[] {
    return this.tournamets;
  }

  public getLastTournament(): {} {
    return this.tournamets[this.tournamets.length - 1];
  }

  public setMatch(team1: string, team2: string): void {
    const match = {
      team1,
      score: ['0/25', '0/25', '0/25', '0/25', '0/15'],
      team2,
      winner: ''
    }
    this.tournamets.push(match);
  }

  public setLastTournament(match: {team1: string, score: string[], team2: string, winner: string}): void {
    this.tournamets[this.tournamets.length - 1] = match;
  }
}
