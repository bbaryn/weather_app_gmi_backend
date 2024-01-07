import { Injectable } from '@nestjs/common';
import axios from 'axios';

import { Location } from 'src/types/Location';
import { Weather } from 'src/types/Weather';

import { errorHandler } from 'src/utils/errorHandler';
import { GetWeatherByLocationDto } from './dto/getWeatherByLocation.dto';

@Injectable()
export class WeatherService {
  async getWeatherByLocation(query: GetWeatherByLocationDto): Promise<Weather> {
    try {
      const location = await axios.get<Location[]>(
        `http://api.openweathermap.org/geo/1.0/direct?q=${query.location}&limit=5&appid=${process.env.OPENWEATHERMAP_API_KEY}`,
      );

      const currentWeather = await axios.get<Weather>(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.data[0].lat}&lon=${location.data[0].lon}&appid=${process.env.OPENWEATHERMAP_API_KEY}`,
      );

      return {
        main: currentWeather.data.main,
        visibility: currentWeather.data.visibility,
        wind: currentWeather.data.wind,
        clouds: currentWeather.data.clouds,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        errorHandler(error?.response.status);
      }

      return error.response;
    }
  }
}
