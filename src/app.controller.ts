import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('status')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: 'Visuzalizar status da aplicação'
  })
  getStatus(): string {
    return this.appService.getStatus('http://localhost:3000');
  }
}
