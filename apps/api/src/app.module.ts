import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReleaseModule } from './release/release.module';
import { ToDosModule } from './to-dos/to-dos.module';

@Module({
  imports: [ReleaseModule, ToDosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
