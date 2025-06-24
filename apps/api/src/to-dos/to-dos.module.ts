import { Module } from '@nestjs/common';
import { ToDosService } from './to-dos.service';
import { ToDosController } from './to-dos.controller';

@Module({
  controllers: [ToDosController],
  providers: [ToDosService],
})
export class ToDosModule {}
