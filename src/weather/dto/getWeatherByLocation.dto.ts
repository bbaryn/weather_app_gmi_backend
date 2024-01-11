import { IsLatitude, IsLongitude, IsNotEmpty } from 'class-validator';

export class GetWeatherByLocationDto {
  @IsNotEmpty()
  @IsLatitude()
  lat: string;

  @IsNotEmpty()
  @IsLongitude()
  lon: string;
}
