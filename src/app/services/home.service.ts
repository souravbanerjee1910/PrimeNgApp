import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, map } from "rxjs";
import { ICity } from "../location.model";

@Injectable()
export class HomeService {

  private cityUrl = 'https://api.jsonbin.io/v3/b/65687edf12a5d37659a12400';
  private resturantUrl = 'https://api.jsonbin.io/v3/b/6569832454105e766fd80c68';
  private DishNameUrl ='https://api.jsonbin.io/v3/b/6569841654105e766fd80cb0';

  constructor(private http: HttpClient) {}

  getCity(): Observable<ICity[]> {
    return this.http.get<any>(this.cityUrl).pipe(
      map((response: any) => {
        if (response && response.record) {
          return response.record;
        } else {
          return [];
        }
      }),
      catchError((error) => {
        console.error('Error fetching city data:', error);
        return [];
      })
    );
  }

}




