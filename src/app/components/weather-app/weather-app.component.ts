import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent implements OnInit {
  date = new Date();
  loading = false;
  city = "";
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
    if (!navigator.geolocation) {
      return alert("Este dispositivo no soporta geolocalización");
    }

    const locationData = await this.weatherService.getLocationData();
    // console.log(locationData.coords);
    
    const latitude = locationData.coords.latitude.toString();
    const longitude = locationData.coords.longitude.toString();
    
    // Get weather by location
    const weatherData = await this.weatherService.getWeatherData(latitude, longitude);
    
    //Set location data
    this.city = weatherData.name;
    this.country_name = weatherData.sys.country;

    // // Actual weather data
    this.weatherNow = weatherData.weather[0].description;
    this.feelsLike = weatherData.main.feels_like;
    this.temp = weatherData.main.temp;
    this.tempMax = weatherData.main.temp_max;
    this.tempMin = weatherData.main.temp_min;
    this.windSpd = weatherData.wind.speed;
    this.icon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    
    // Icon code test
    // this.icon = `http://openweathermap.org/img/wn/01n@2x.png`;

    this.loading = false;
    
    // // API CONNECT TEST
    // console.log(weatherData);
    // console.log(this.weatherNow);
  }
}
