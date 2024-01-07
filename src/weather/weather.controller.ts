import { Controller, Get, Query } from '@nestjs/common';

import { GetWeatherByLocationDto } from './dto/getWeatherByLocation.dto';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  getWeatherByLocation(@Query() query: GetWeatherByLocationDto): Promise<any> {
    return;
  }
}
