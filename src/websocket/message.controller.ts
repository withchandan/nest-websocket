import { Controller, Post, Body } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post('broadcast')
  broadcastMessage(@Body('message') message: string) {
    this.messageService.sendMessageToAll(message);
    return { status: 'Message broadcasted' };
  }

  @Post('broadcast-specific')
  broadcastMessageToSpecificClients(
    @Body('message') message: string,
    @Body('clientIds') clientIds: string[],
  ) {
    this.messageService.sendMessageToSpecificClients(message, clientIds);
    return { status: 'Message broadcasted to specific clients' };
  }
}
