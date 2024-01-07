import { IsNotEmpty, IsString } from 'class-validator';

export class GetWeatherByLocationDto {
  @IsNotEmpty()
  @IsString()
  location: string;
}
