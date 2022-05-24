import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { flights } from './flights';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  url: string = "http://localhost:3000/flights";
   getflights()
   {
     return this.http.get<flights[]>(this.url);
   }
}
