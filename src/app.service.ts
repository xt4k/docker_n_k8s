import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Good-bye world. again hope. We don"t know how it works, If we will know, but we don"t know how it...';
  }
}
