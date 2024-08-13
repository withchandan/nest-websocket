import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

import { Cache } from 'cache-manager';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('cache')
  async setToCache(
    @Body('id') id: string,
    @Body('message') message: string,
  ): Promise<void> {
    await this.cacheManager.set(id, message, 15000);
  }

  @Get('cache/:id')
  async getFromCache(@Param('id') id: string): Promise<string> {
    const message = await this.cacheManager.get<string>(id);

    console.log(message);

    return message;
  }
}
