import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TournametService } from './tournamet.service';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {
  private URL = 'https://localhost:44368/creatematch/';
  private header = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private tournamentService: TournametService) { }

  public sendMatch(): void {
    const lastMatch = JSON.stringify(this.tournamentService.getLastTournament());

    this.http.post(this.URL, lastMatch, { headers: this.header })
      .subscribe(
        (response) => console.log('Response from server:', response),
        (error) => console.log('Error message', error)
      );
  }
}
