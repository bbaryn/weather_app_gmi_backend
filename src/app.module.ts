import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [WeatherModule, ConfigModule.forRoot({ envFilePath: '.env' })],
  controllers: [],
  providers: [],
})
export class AppModule {}
