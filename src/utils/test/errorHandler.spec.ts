import {
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { errorHandler } from '../errorHandler';

describe('errorHandler', () => {
  it('should throw BadRequestException for status 400', () => {
    expect(() => errorHandler(400)).toThrow(BadRequestException);
  });

  it('should throw UnauthorizedException for status 401', () => {
    expect(() => errorHandler(401)).toThrow(UnauthorizedException);
  });

  it('should throw NotFoundException for status 404', () => {
    expect(() => errorHandler(404)).toThrow(NotFoundException);
  });

  it('should throw InternalServerErrorException for any other status', () => {
    const statusCodes = [500, 403, 405];
    statusCodes.forEach((status) => {
      expect(() => errorHandler(status)).toThrow(InternalServerErrorException);
    });
  });
});
