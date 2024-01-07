import {
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

export const errorHandler = (status: number) => {
  switch (status) {
    case 400:
      throw new BadRequestException();
    case 401:
      throw new UnauthorizedException();
    case 404:
      throw new NotFoundException();
    default:
      throw new InternalServerErrorException();
  }
};
