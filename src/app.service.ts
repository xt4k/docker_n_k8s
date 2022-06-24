import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'The maginc 13';
  }
}
// containerDefinitions.image
