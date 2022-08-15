import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  // readonly options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '8895a30e96msh9b6ae83d4c51df2p1b1544jsn252c9d717f4f',
  //     'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
  //   }
  // };
  // private ROUTE_API_LOCATION = `https://api.ipgeolocation.io/ipgeo?apiKey=${this.ipGeoAPIKey}`;
  private ROUTE_API_LOCATION = 'https://json.geoiplookup.io/';
  private OPEN_WEATHER_API = '6168bc99a8fb2d7db3a7f6f9d3090ac9';

  // PRUEBA DE API OPEN WEATHER
  // https://api.openweathermap.org/data/2.5/weather?lat=4.65124&lon=-74.1064&appid=6168bc99a8fb2d7db3a7f6f9d3090ac9

  constructor() { }

  async getLocationData() {
    const response = await fetch(this.ROUTE_API_LOCATION);
    // console.log(response);
    return await response.json();
  }

  async getWeatherData(latitude: string, longitude: string) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${this.OPEN_WEATHER_API}`)
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
