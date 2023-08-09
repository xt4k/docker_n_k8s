import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'And one more again -"Hello f**ing World"';
  }
}
