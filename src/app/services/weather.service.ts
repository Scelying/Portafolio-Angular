import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private ROUTE_API_LOCATION = "https://freegeoip.app/json/";

  constructor() { }

  async getLocationData() {
    const response = await fetch(this.ROUTE_API_LOCATION);
    return await response.json();
  }

  async getWeatherData(longitude: string, latitude: string) {
    const response = await fetch('http://www.7timer.info/bin/civillight.php?lon=${longitude}&lat=${latitude}&ac=0&unit=metric&output=json')
    return await response.json();
  }

  parseDate(value: string){
    value = "" + value;
    if (!value) {
      return "";
    } 
    let year = value.substring(0, 4);
    let month = value.substring(4, 6);
    let day = value.substring(6, 8);
    return year + "-" + month + "-" + day; 
  }
}
