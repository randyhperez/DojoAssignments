import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';
import { weatherObj } from '../weatherObj';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  weather: weatherObj = new weatherObj()

  constructor(private _weatherApiService: WeatherApiService ) { }

  ngOnInit() {
    this._weatherApiService.getWeather('washingtondc')
      .then(response => {
        console.log('washingtondcComp Response', response)
        this.weather.humidity = response.main.humidity
        this.weather.temp = Math.floor(response.main.temp * (9/5) - 459.67) 
        this.weather.temp_max = Math.floor(response.main.temp_max * (9/5) - 459.67)
        this.weather.temp_min = Math.floor(response.main.temp_min * (9/5) - 459.67) 
        this.weather.status = response.weather[0].description
      })
      .catch(error => console.log('washingtondc Comp Error', error)
      )
  }

}
