import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita CORS para permitir requisições de outras origens
  app.enableCors();

  // Usa a porta definida na variável de ambiente PORT ou 8080 como fallback
  const port = parseInt(process.env.PORT || '8080', 10);
  await app.listen(port);

  console.log(`🚀 Server is running on http://localhost:${port}`);
}
bootstrap();
