import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Permitindo acesso de qualquer origem (CORS)
  app.enableCors();

  // Railway define a porta via variável de ambiente PORT
  const port = parseInt(process.env.PORT, 10) || 8080;
  await app.listen(port);

  console.log(`🚀 Server is running on http://localhost:${port}`);
}
bootstrap();
