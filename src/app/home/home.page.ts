import { Component, OnInit } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { HttpService } from '../services/http.service';
import { Observable } from 'rxjs';
import { Country } from '../models/country';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  countries:Observable<Country[]>;
  constructor(private data: DataService,private httpService:HttpService,private router:Router) {}

  ngOnInit(): void {
   this.countries = this.httpService.getAllCountries();
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  viewCountry(country:Country){
    this.router.navigate(['country',country.country]);
  }

}
