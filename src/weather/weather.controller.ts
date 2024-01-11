import {
  Controller,
  Get,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';

import { ApiKeyGuard } from 'src/guards/ApiKeyGuard';
import { Location } from 'src/types/Location';
import { Weather } from 'src/types/Weather';

import { GetLocationListDto } from './dto/getLocationList.dto';
import { GetWeatherByLocationDto } from './dto/getWeatherByLocation.dto';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('/location-list')
  @UseGuards(ApiKeyGuard)
  getLocations(
    @Query(ValidationPipe) query: GetLocationListDto,
  ): Promise<Location[]> {
    return this.weatherService.getLocationList(query);
  }

  @Get('/forecast')
  @UseGuards(ApiKeyGuard)
  getWeatherByLocation(
    @Query(ValidationPipe) query: GetWeatherByLocationDto,
  ): Promise<Weather> {
    return this.weatherService.getWeatherByLocation(query);
  }
}
