import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { TournametService } from 'src/app/services/tournamet.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('input1') team1Name: ElementRef;
  @ViewChild('input2') team2Name: ElementRef;

  constructor(private tournametService: TournametService, private router: Router) { }

  ngOnInit(): void {
  }

  public play(): void {
    const team1 = this.team1Name.nativeElement.value;
    const team2 = this.team2Name.nativeElement.value;
    this.tournametService.setMatch(team1, team2);
    this.router.navigateByUrl('/marcador');
  }

}
