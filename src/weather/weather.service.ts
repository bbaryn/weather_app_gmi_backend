import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios from 'axios';

import { Location } from 'src/types/Location';
import { Weather } from 'src/types/Weather';

import { errorHandler } from 'src/utils/errorHandler';
import { GetWeatherByLocationDto } from './dto/getWeatherByLocation.dto';

@Injectable()
export class WeatherService {
  async getWeatherByLocation(query: GetWeatherByLocationDto): Promise<Weather> {
    try {
      const location = await axios.get<Location>(
        `http://api.openweathermap.org/geo/1.0/direct?q=${query.location}&limit=5&appid=${process.env.OPENWEATHERMAP_API_KEY}`,
      );

      errorHandler(location.status);

      const currentWeather = await axios.get<Weather>(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.data.lat}&lon=${location.data.lon}&appid=${process.env.OPENWEATHERMAP_API_KEY}`,
      );

      errorHandler(currentWeather.status);

      return currentWeather.data;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
