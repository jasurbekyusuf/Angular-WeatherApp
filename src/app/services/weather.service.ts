import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from '../modules/weather.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getweatherData(city: string, units: string): Observable<WeatherData>{
    return this.http.get<WeatherData>('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=3b64cd38ec9cbfdfeaffcb512197041b&units='+units+'');
  }
}
