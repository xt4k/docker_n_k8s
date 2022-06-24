import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'DOES IT WORK??';
  }
}
// containerDefinitions.image
