import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TournametService } from './tournamet.service';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {
  private URL = '...';

  constructor(private http: HttpClient, private tournamentService: TournametService) { }

  public sendMatch(): void {
    this.http.post(this.URL, this.tournamentService.getLastTournament());
  }
}
