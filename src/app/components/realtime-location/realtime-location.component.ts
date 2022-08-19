import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realtime-location',
  templateUrl: './realtime-location.component.html',
  styleUrls: ['./realtime-location.component.css']
})
export class RealtimeLocationComponent implements OnInit {
  
  latitude= "";
  Longitude= "";

  constructor() { }

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    if (!navigator.geolocation) {
        return alert("El dispositivo no soporta la geolocalización");
    }

    const onLocationAccess = (location: any) => {
      // console.log("La ubicación es: ", location);
      this.latitude = location.coords.latitude;
      this.Longitude = location.coords.longitude;
      // console.log(this.latitude);
      // console.log(this.Longitude);      
    }

    const onErrorLocation = (err: any) => {
      console.log("Error de ubicación: ", err);
    }

    const locationOptions = {
      enableHighAccuracy: true,
      maximumAge: 0, 
      timeout: 10000
    }

    navigator.geolocation.getCurrentPosition(onLocationAccess, onErrorLocation, locationOptions);

  }

}
