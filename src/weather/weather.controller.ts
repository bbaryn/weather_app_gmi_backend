import { Controller, Get, Query, UseGuards } from '@nestjs/common';

import { ApiKeyGuard } from 'src/guards/ApiKeyGuard';
import { Weather } from 'src/types/Weather';

import { GetWeatherByLocationDto } from './dto/getWeatherByLocation.dto';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  @UseGuards(ApiKeyGuard)
  getWeatherByLocation(
    @Query() query: GetWeatherByLocationDto,
  ): Promise<Weather> {
    return this.weatherService.getWeatherByLocation(query);
  }
}
