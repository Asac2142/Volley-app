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
  @ViewChild('equipo1') equipo1: ElementRef;
  @ViewChild('equipo2') equipo2: ElementRef;
  public checkForService = false;
  public disableElement = false;

  constructor(private tournamentService: TournametService) { }

  ngOnInit(): void { }

  public addScoreTeam(id: number): void {    
    let score1 = parseInt(this.score1.nativeElement.value);
    let score2 = parseInt(this.score2.nativeElement.value);
    
    if (id === 1) {
      score1++;
      this.score1.nativeElement.value = score1;
      this.setWinner(score1, score2, id);
    } else {
      score2++;
      this.score2.nativeElement.value = score2;
      this.setWinner(score2, score1, id);
    }    

    this.setService();    
  }

  private setWinner(score1: number, score2: number, teamNumber: number): void {
    const gmSt = parseInt(this.gameSet);
    const difference = score1 - score2;

    if (gmSt >= 1 && gmSt <= 4) {
      if (score1 >= 25 && difference >= 0) {
        if (difference >= 2) {          
          this.storeResult(teamNumber);
          this.setWinnerStyles(teamNumber);          
        }
      }
    } else {        
      if (score1 >= 15 && difference >= 0) {
        if (difference >= 2) {            
          this.storeResult(teamNumber);
          this.setWinnerStyles(teamNumber);            
        }
      }
    }
  }

  private setWinnerStyles(teamNumber: number): void {
      if (teamNumber === 1) {
        this.equipo1.nativeElement.style.backgroundColor = 'green';
        this.equipo1.nativeElement.style.border = '2px solid black';
        this.equipo1.nativeElement.style.color = 'white';
      } else {
        this.equipo2.nativeElement.style.backgroundColor = 'green';
        this.equipo2.nativeElement.style.border = '2px solid black';
        this.equipo2.nativeElement.style.color = 'white';
      }
      this.disableElement = true;    
  }

  private storeResult(teamNumber: number): void {
    const puntaje1 = this.score1.nativeElement.value;
    const puntaje2 = this.score2.nativeElement.value;    
    this.match.score[parseInt(this.gameSet) - 1] = `${puntaje1}/${puntaje2}`;

    const matchPlayed = {
      team1: this.match.team1,
      score: this.match.score,
      team2: this.match.team2,
      accountant: {
        team1: teamNumber === 1 ? ++this.match.accountant.team1 : this.match.accountant.team1,
        team2: teamNumber === 2 ? ++this.match.accountant.team2 : this.match.accountant.team2,
      }
    }
    this.tournamentService.setLastTournament(matchPlayed);
    this.verifyNumberOfWins();
  }

  private verifyNumberOfWins(): void {
    if (this.match.accountant.team1 === 3 || this.match.accountant.team2 === 3) {
      console.log("PARTIDO FINALIZADO");
    }
  }

  private setService(): void {
    this.checkForService = !this.checkForService;
  }
}
