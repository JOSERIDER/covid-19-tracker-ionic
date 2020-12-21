import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RootHit } from '../image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apikey:string = '14902362-bc770bb75ec09c3c85be8e62d';
  constructor(private http:HttpClient) { }

  getImage(name:string){
    return this.http.get(`https://pixabay.com/api/?key=14902362-bc770bb75ec09c3c85be8e62d&q=${name}+flags&image_type=photo&min_width=500`).pipe(map(image => image as RootHit));
  }
}
