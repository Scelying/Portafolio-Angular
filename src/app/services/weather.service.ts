import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  private OPEN_WEATHER_API = environment.OPEN_WEATHER_API;

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

}
