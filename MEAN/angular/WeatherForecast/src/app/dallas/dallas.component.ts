import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';
import { weatherObj } from '../weatherObj';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  weather: weatherObj = new weatherObj();

  constructor(private _weatherApiService: WeatherApiService) { }

  ngOnInit() {

    this._weatherApiService.getWeather('dallas')
      .then(response => {
        console.log('dallasComp Response', response)
        this.weather.humidity = response.main.humidity
        this.weather.temp = Math.floor(response.main.temp * (9/5) - 459.67) 
        this.weather.temp_max = Math.floor(response.main.temp_max * (9/5) - 459.67)
        this.weather.temp_min = Math.floor(response.main.temp_min * (9/5) - 459.67) 
        this.weather.status = response.weather[0].description
      })
      .catch(error => console.log('dallas Comp Error', error)
      )

  }

}
