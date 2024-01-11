import { IsNotEmpty, IsString } from 'class-validator';

export class GetLocationListDto {
  @IsNotEmpty()
  @IsString()
  location: string;
}
