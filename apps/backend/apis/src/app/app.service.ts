import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string; isProd: string } {
    return {
      message: 'Hello API V1',
      isProd: (process.env['ENV'] || 'No Env') as string,
    };
  }
}
