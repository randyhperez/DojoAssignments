import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';
import { weatherObj } from '../weatherObj';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather: weatherObj = new weatherObj();

  constructor(private _weatherApiService: WeatherApiService) { }

  ngOnInit() {

    this._weatherApiService.getWeather('burbank')
      .then(response => {
        console.log('burbankComp Response', response)
        this.weather.humidity = response.main.humidity
        this.weather.temp = Math.floor(response.main.temp * (9/5) - 459.67) 
        this.weather.temp_max = Math.floor(response.main.temp_max * (9/5) - 459.67)
        this.weather.temp_min = Math.floor(response.main.temp_min * (9/5) - 459.67) 
        this.weather.status = response.weather[0].description
      })
      .catch(error => console.log('burbank Comp Error', error)
      )

  }

}
