import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import {Country} from '../models/country'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl = 'https://corona.lmao.ninja';
  constructor(private HttpClient:HttpClient) { }


  getAllCountries():Observable<Country[]>{
    return this.HttpClient.get(`${this.baseUrl}/v3/covid-19/countries`).pipe(map(country => country as Country[]));
  }

  getCountryByName(name:string){
    return this.HttpClient.get(`${this.baseUrl}/v3/covid-19/countries/${name}`).pipe(map(country => country as Country));
  }
}
