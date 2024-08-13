import { Test, TestingModule } from '@nestjs/testing';
import { MessageService } from './message.service';
import { EventsGateway } from './events.gateway';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageService, { provide: EventsGateway, useValue: {} }],
    }).compile();

    service = module.get<MessageService>(MessageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
