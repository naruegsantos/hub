import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from "@/../../packages/env/src/index";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(env.PORT ?? 8000);
}
bootstrap();
