import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus(baseUrl: string) {
    return 'Server is running! 🚀\n Please check http://localhost:3333/api for Swagger docs...'
  }
}
