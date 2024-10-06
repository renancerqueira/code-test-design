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
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true, // Definir como "false" em produção
    }),
    GlobalCacheModule,
    ExamModule,  // Módulo para o exam-service
  ],
})
export class AppModule {}
