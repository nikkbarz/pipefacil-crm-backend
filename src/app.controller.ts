import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return '🚀 PipeFácil CRM Backend está vivo e funcional!';
  }
}
