import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebsocketModule } from './websocket';

@Module({
  imports: [
    WebsocketModule,
    CacheModule.register({ isGlobal: true, ttl: 10 * 1000 }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
