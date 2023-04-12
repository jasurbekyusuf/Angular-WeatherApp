import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData, Wind } from './modules/weather.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'angular-weatherApp';

  iconUrl: string = '';
  city: string = 'Tashkent';
  cityName: string = '';
  units:string = 'metric';
  weatherImagesData : any;
  imagePath: string = '';
  weatherInfo: string = '';
  weatherData?:WeatherData

  constructor(private weatherService: WeatherService){}

  ngOnInit(): void {
    this.getWeatherDate(this.city);
    this.getWeatherImageDate(this.city);
    this.city = '';

  }

  onSubmit(){
    this.getWeatherDate(this.city);
    this.getWeatherImageDate(this.city);
    this.city = '';
  }

  private getWeatherDate(city: string){
    this.weatherService.getweatherData(city)
    .subscribe({
      next:(response) => {
        this.weatherData = response;
        this.iconUrl = 'https://openweathermap.org/img/wn/' +this.weatherData.weather[0].icon+'@2x.png';
        this.weatherInfo = this.weatherData.weather[0].main
      }
    })
  }

  private getWeatherImageDate(city: string){
    this.weatherService.getweatherData(city)
    .subscribe({
      next:(response) => {
        this.weatherData = response;
        console.log(this.weatherData.weather[0].main)
        switch (this.weatherData.weather[0].main) {
          case "Clouds":
            this.imagePath = '../assets/cloud.jpg'
            break;
          case "Clear":
            this.imagePath = '../assets/sunny.jpg'
          break;
          case "Thunderstorm":
            this.imagePath = '../assets/Thunderstorm.jpg'
          break;
          case "Drizzle":
            this.imagePath = '../assets/rain.jpg'
          break;
          case "Haze":
            this.imagePath = '../assets/smoke.jpg'
          break;
          case "Rain":
            this.imagePath = '../assets/rain.jpg'
          break;
          case "Snow":
            this.imagePath = '../assets/snow.jpg'
          break;
          case "Mist":
            this.imagePath = '../assets/mist.jpg'
          break;
          case "Smoke":
            this.imagePath = '../assets/smoke.jpg'
          break;

          default:
            break;
        }
      }
    })
  }
}
