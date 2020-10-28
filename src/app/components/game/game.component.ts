import { Component, OnInit } from '@angular/core';

import { TournametService } from 'src/app/services/tournamet.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public match: {team1: string, score: string[], team2: string, accountant: { team1: number, team2: number}};
  public showMessage = false;
  public sets: number[] = [1,2,3,4,5];

  constructor(private tournamentService: TournametService) { }

  ngOnInit(): void {
    const lastMatch = this.tournamentService.getLastTournament();
    this.verifyLastMatch(lastMatch);
  }

  private verifyLastMatch(match: {team1: string, score: string[], team2: string, accountant: { team1: number, team2: number}}): void{
    if (match) {
      if (match.team1 && match.team2 ) {        
        this.match = match;
        this.showMessage = false;
      } else {
        this.showMessage = true;  
      }
    } else {
      this.showMessage = true;
    }
  }
}
