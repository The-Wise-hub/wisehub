import { Injectable } from '@nestjs/common';
import { environment } from '../environments/environment';

@Injectable()
export class AppService {
  getData(): { message: string; isProd: boolean } {
    return { message: 'Hello API V1', isProd: environment.production };
  }
}
