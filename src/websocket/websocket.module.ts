import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';

@Module({
  providers: [EventsGateway, MessageService],
  controllers: [MessageController],
})
export class WebsocketModule {}
