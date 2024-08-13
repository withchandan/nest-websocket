import { Injectable } from '@nestjs/common';

import { EventsGateway } from './events.gateway';

@Injectable()
export class MessageService {
  constructor(private readonly eventsGateway: EventsGateway) {}

  sendMessageToAll(message: string) {
    this.eventsGateway.broadcastMessage(message);
  }

  sendMessageToSpecificClients(message: string, clientIds: string[]) {
    this.eventsGateway.broadcastToSpecificClients(message, clientIds);
  }
}
