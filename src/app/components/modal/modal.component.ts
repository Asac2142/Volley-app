import { Component, Input, OnInit } from '@angular/core';
import { TournametService } from 'src/app/services/tournamet.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input('winnerTeam') winnerTeam: string;

  constructor(private tournamentService: TournametService) { }

  ngOnInit(): void { }

  public newGame(): void {
    this.tournamentService.getTournaments().pop();
  }
}
