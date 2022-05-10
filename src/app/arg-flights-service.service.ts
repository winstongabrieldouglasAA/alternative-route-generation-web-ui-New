import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArgFlightsServiceService {

  constructor(private http: HttpClient) { }
  getData()
  {
    let url = "https://f463b7a9-3a94-4f7f-88d9-6b998e16cdc9.mock.pstmn.io/ARGFlights"
    return this.http.get(url);
  }
}
