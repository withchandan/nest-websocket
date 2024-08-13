import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  private clients: Map<string, Socket> = new Map();

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
    this.clients.set(client.id, client);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
    this.clients.delete(client.id);
  }

  broadcastMessage(message: string) {
    this.server.emit('practice', message);
  }

  broadcastToSpecificClients(message: string, clientIds: string[]) {
    clientIds.forEach((clientId) => {
      const client = this.clients.get(clientId);

      if (client) {
        client.emit('practice', message);
      }
    });
  }
}
