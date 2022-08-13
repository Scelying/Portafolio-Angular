import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent implements OnInit {
  @Input() details: any
  loading = false;
  city = "";
  region_name = "";
  country_name = "";
  hour = "";
  weatherNow = {};
  detailsNextDays = [];

  constructor(private weatherService: WeatherService) { }

  startWatch(){
    const _this = this;

    setInterval(() => {
      let hour = "";
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let hoursFix = hours.toString();
      if (hours < 10) {
        hoursFix = "0" + hoursFix;
      }
      let minutesFix = minutes.toString();
      if (minutes < 10) {
        minutesFix = "0" + minutesFix;
      }
      let secondsFix = seconds.toString();
      if (seconds < 10) {
        secondsFix = "0" + secondsFix;
      }
      _this.hour = `${hoursFix}:${minutesFix}:${secondsFix}`;
    }, 500);
  }

  async ngOnInit() {
    this.loading = true;
    const locationData = await this.weatherService.getLocationData();
    this.city = locationData.city;
    this.region_name = locationData.region;
    this.country_name = locationData.country_name;
    const latitude = locationData.latitude;
    const longitude = locationData.longitude;

    const weatherData = await this.weatherService.getWeatherData(latitude, longitude);
    
    this.weatherNow = weatherData.data[0].weather.description;
    // this.detailsToday = weatherData.dataseries.slice(0, 1)[0];
    // this.detailsNextDays = weatherData.dataseries.slice(1, 5);

    this.loading = false;
    this.startWatch();
    
    console.log(weatherData);
    console.log(this.weatherNow);
    
  }

}
