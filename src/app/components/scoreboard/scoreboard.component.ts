import { Component, Input, OnInit } from '@angular/core';

import { TournametService } from 'src/app/services/tournamet.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  @Input('lastMatch') match: {team1: string, score: string[], team2: string, winner: string};
  public checkForService = false;

  constructor(private tournamentService: TournametService) { }

  ngOnInit(): void { 
  }

  public setService(): void {
    this.checkForService = !this.checkForService;
  }

  public addScoreTeam1(): void {
    
  }

  public addScoreTeam2(): void {
    
  }

}
