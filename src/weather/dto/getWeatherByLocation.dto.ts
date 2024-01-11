import { IsNotEmpty, IsString } from 'class-validator';

export class GetWeatherByLocationDto {
  @IsNotEmpty()
  @IsString()
  lat: string;

  @IsNotEmpty()
  @IsString()
  lon: string;
}
