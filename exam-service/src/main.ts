import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as moment from 'moment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Exam API')
    .setDescription('API for managing exams')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Adicionando log para medir o tempo de início e término da requisição
  app.use((req, res, next) => {
    const start = moment();
    res.on('finish', () => {
      const end = moment();
      const duration = end.diff(start, 'milliseconds');
      console.log(`[${req.method}] ${req.originalUrl} - ${duration}ms`);
    });
    next();
  });

  await app.listen(3000);
}
bootstrap();
