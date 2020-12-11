import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogoService {
  private serverURL: string = 'https://ghibliapi.herokuapp.com/films';
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor() { }
}
export class ConfigService {
  constructor(private http: HttpClient) { }
}
