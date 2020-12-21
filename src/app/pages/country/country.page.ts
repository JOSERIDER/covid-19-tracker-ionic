import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/models/country';
import { HttpService } from 'src/app/services/http.service';
import { Observable, Subscription } from 'rxjs';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.page.html',
  styleUrls: ['./country.page.scss'],
})
export class CountryPage implements OnInit,OnDestroy {
 
  country$:Observable<Country>;
  image:string = "";
  private supcription:Subscription = new Subscription();
  constructor(private activatedRoute:ActivatedRoute,private httpService:HttpService,private imageService:ImageService) { }

  ngOnInit() {
   this.supcription.add(  this.activatedRoute.params.subscribe(param =>{
      let name = param['name'];
    this.country$ = this.httpService.getCountryByName(name);
    this.imageService.getImage(name).subscribe( i => {
      this.image = i.hits[0].largeImageURL;
    })
    }));

  }

  ngOnDestroy(): void {
    this.supcription.unsubscribe();
  }

}
