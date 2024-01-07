import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const apiKey = context.switchToHttp().getRequest().headers['X-API-KEY'];

    if (!apiKey) {
      throw new UnauthorizedException();
    }

    if (apiKey !== process.env.API_KEY) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
