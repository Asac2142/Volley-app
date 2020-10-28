import { Component, OnInit } from '@angular/core';
import { TournametService } from 'src/app/services/tournamet.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  team1Name: string;
  team2Name: string;

  constructor(private tournametService: TournametService) { }

  ngOnInit(): void {
  }

  public play(): void {

  }

}
