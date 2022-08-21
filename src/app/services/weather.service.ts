import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  private OPEN_WEATHER_API = '6168bc99a8fb2d7db3a7f6f9d3090ac9';

  constructor() { }

  async getLocationData(): Promise<GeolocationPosition> {

    const localOptions = {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 10000
    }

    return new Promise((resolve, onErrorLocation) => {
      navigator.geolocation.getCurrentPosition(
        resolve,
        onErrorLocation,
        localOptions);
    }
    );
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
