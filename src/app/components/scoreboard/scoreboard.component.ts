import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { TournametService } from 'src/app/services/tournamet.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  @Input('lastMatch') match: {team1: string, score: string[], team2: string, accountant: { team1: number, team2: number}};
  @Input('gameSet') gameSet: string;
  @ViewChild('score1') score1: ElementRef;
  @ViewChild('score2') score2: ElementRef;

  public checkForService = false;

  constructor(private tournamentService: TournametService) { }

  ngOnInit(): void { }

  public addScoreTeam1(): void {    
    let score1 = parseInt(this.score1.nativeElement.value);
    const score2 = parseInt(this.score2.nativeElement.value);    
    score1++;

    this.setWinner(score1, score2, this.match.team1);
    this.score1.nativeElement.value = score1;
    this.setService();    
  }

  public addScoreTeam2(): void {
    let score2 = parseInt(this.score2.nativeElement.value);
    const score1 = parseInt(this.score1.nativeElement.value);        
    score2++;

    this.setWinner(score2, score1, this.match.team2);
    this.score2.nativeElement.value = score2;
    this.setService();
  }

  private setWinner(score1: number, score2: number, team: string): void {
    const gmSt = parseInt(this.gameSet);
    const difference = score1 - score2;

    if (gmSt >= 1 && gmSt <= 4) {
      if (score1 >= 25 && difference >= 0) {
        if (difference >= 2) {
          console.log(`${team} gana el set #${gmSt}`);
        }
      }
    } else {        
        if (score1 >= 15 && difference >= 0) {
          if (difference >= 2) {
            console.log(`${team} gana el set ${gmSt}`);
          }
        }
    }
  }

  private setService(): void {
    this.checkForService = !this.checkForService;
  }

}
