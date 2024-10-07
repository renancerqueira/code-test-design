import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamModule } from './exam/exam.module';
import { ConfigModule } from '@nestjs/config';
import { GlobalCacheModule } from './common/modules/global-cache.module';

@Module({
  imports: [
    ConfigModule.forRoot(),  // Habilitar o uso de variáveis de ambiente
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      username: process.env.DATABASE_USER || 'postgres',
      password: process.env.DATABASE_PASSWORD || 'password',
      database: process.env.DATABASE_NAME || 'exam_db',
      autoLoadEntities: true,
      synchronize: true, // Definir como "false" em produção
    }),
    GlobalCacheModule,
    ExamModule,  // Módulo para o exam-service
  ],
})
export class AppModule {}
