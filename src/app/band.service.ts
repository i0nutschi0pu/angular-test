import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Band {
  id: Number,
  name: String,
}

const API_URL: string = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})
export class BandService {

    constructor(private http: HttpClient) { 
    }

    getBands(): Observable<Band[]> {
        return this.http.get<Band[]>(API_URL + '/bands',  { headers: new HttpHeaders({
              'Authorization': '{data}',
              'Content-Type': 'application/json',
              })
            });
    }

    addBand(band: any): Observable<any> {
      return this.http.post(API_URL + '/bands', band, 
          { headers: new HttpHeaders({
            'Authorization': '{data}',
            'Content-Type': 'application/json',
            })
          });
    }
}
