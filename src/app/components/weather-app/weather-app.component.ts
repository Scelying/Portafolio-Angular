import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent implements OnInit {
  // @Input() details: any
  date = new Date();
  loading = false;
  city = "";
  region_name = "";
  country_name = "";
  weatherNow = {};
  feelsLike = "";
  temp = "";
  tempMax = "";
  tempMin = "";
  windSpd = "";
  icon = '';

  constructor(private weatherService: WeatherService) { }

  async ngOnInit() {
    // Charging message
    this.loading = true;

    // Get location
    const locationData = await this.weatherService.getLocationData();
    this.city = locationData.city;
    this.region_name = locationData.region;
    this.country_name = locationData.country_name;
    const latitude = locationData.latitude;
    const longitude = locationData.longitude;
    
    // Get weather by location
    const weatherData = await this.weatherService.getWeatherData(latitude, longitude);
    
    // Actual weather data
    this.weatherNow = weatherData.weather[0].description;
    this.feelsLike = weatherData.main.feels_like;
    this.temp = weatherData.main.temp;
    this.tempMax = weatherData.main.temp_max;
    this.tempMin = weatherData.main.temp_min;
    this.windSpd = weatherData.wind.speed;
    this.icon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    
    // Icon code test
    // this.icon = `http://openweathermap.org/img/wn/01n@2x.png`;
    
    // this.detailsToday = weatherData.dataseries.slice(0, 1)[0];
    // this.detailsNextDays = weatherData.dataseries.slice(1, 5);

    this.loading = false;
    
    // API CONNECT TEST
    // console.log(weatherData);
    // console.log(this.weatherNow);
  }
}
