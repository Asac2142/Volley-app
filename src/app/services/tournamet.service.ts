import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournametService {
  private tournamets: {team1: string, score: string[], team2: string, accountant: { team1: number, team2: number}}[] = [];
  public endMatch: Subject<boolean> = new Subject<boolean>();
  public winner: Subject<string> = new Subject<string>();

  constructor() { }

  public getTournaments(): {team1: string, score: string[], team2: string, accountant: { team1: number, team2: number}}[] {
    return this.tournamets;
  }

  public getLastTournament(): {team1: string, score: string[], team2: string, accountant: { team1: number, team2: number}} {
    return this.tournamets[this.tournamets.length - 1];
  }

  public setMatch(team1: string, team2: string): void {
    const match = {
      team1,
      score: ['0/0', '0/0', '0/0', '0/0', '0/0'],
      team2,
      accountant: {
        team1: 0,
        team2: 0
      }
    }
    this.tournamets.push(match);
  }

  public setLastTournament(match: {team1: string, score: string[], team2: string, accountant: { team1: number, team2: number}}): void {
    this.tournamets[this.tournamets.length - 1] = match;
  }
}
