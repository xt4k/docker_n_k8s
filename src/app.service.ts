import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'IS IT A CPU THING';
  }
}
// containerDefinitions.image
