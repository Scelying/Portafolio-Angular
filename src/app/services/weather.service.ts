import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  readonly options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8895a30e96msh9b6ae83d4c51df2p1b1544jsn252c9d717f4f',
      'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
  };
  // private ROUTE_API_LOCATION = `https://api.ipgeolocation.io/ipgeo?apiKey=${this.ipGeoAPIKey}`;
  private ROUTE_API_LOCATION = 'https://json.geoiplookup.io/';

  constructor() { }

  async getLocationData() {
    const response = await fetch(this.ROUTE_API_LOCATION);
    console.log(response);
    return await response.json();
  }

  async getWeatherData(latitude: string, longitude: string) {
    const response = await fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=${latitude}&lon=${longitude}`, this.options)
    return await response.json();
  }

  parseDate(value: string) {
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
