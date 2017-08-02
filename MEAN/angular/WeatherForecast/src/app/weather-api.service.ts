import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherApiService {

  constructor(private _http: Http) { }

  getWeather(city: string): any {
    console.log(`Getting weather for ${ city }`);
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=0f5d65e9ebe270b2613d5d499ef6d91f`)
      .map(data =>  data.json())
      .toPromise();
  }
}
