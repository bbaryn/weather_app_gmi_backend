import { Controller, Get, Query } from '@nestjs/common';

import { Weather } from 'src/types/Weather';

import { GetWeatherByLocationDto } from './dto/getWeatherByLocation.dto';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  getWeatherByLocation(
    @Query() query: GetWeatherByLocationDto,
  ): Promise<Weather> {
    return this.weatherService.getWeatherByLocation(query);
  }
}
