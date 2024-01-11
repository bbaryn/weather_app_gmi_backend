import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as lodash from 'lodash';

import { Location } from 'src/types/Location';
import { Weather } from 'src/types/Weather';
import { errorHandler } from 'src/utils/errorHandler';

import { GetLocationListDto } from './dto/getLocationList.dto';
import { GetWeatherByLocationDto } from './dto/getWeatherByLocation.dto';

@Injectable()
export class WeatherService {
  async getWeatherByLocation(query: GetWeatherByLocationDto): Promise<Weather> {
    try {
      const currentWeather = await axios.get<Weather>(
        `https://api.openweathermap.org/data/2.5/weather?lat=${query.lat}&lon=${query.lon}&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric`,
      );

      return {
        main: lodash.mapKeys(currentWeather.data.main, (_, key) =>
          lodash.camelCase(key),
        ),
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

  async getLocationList(query: GetLocationListDto): Promise<Location[]> {
    try {
      const locations = await axios.get<Location[]>(
        `http://api.openweathermap.org/geo/1.0/direct?q=${query.location}&limit=5&appid=${process.env.OPENWEATHERMAP_API_KEY}`,
      );

      return locations.data.map((location) => {
        return {
          name: location.name,
          lat: location.lat,
          lon: location.lon,
          country: location.country,
          state: location.state,
        };
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        errorHandler(error?.response.status);
      }

      return error.response;
    }
  }
}
