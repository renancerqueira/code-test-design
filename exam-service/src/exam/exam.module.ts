import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamController } from './controllers/exam.controller';
import { ExamService } from './services/exam.service';
import { AnswerSheet } from './entities/answer-sheet.entity';
import { HttpModule } from '@nestjs/axios';
import { ExamPackingClient } from 'src/clients/exam-packing.client';

@Module({
  imports: [
    TypeOrmModule.forFeature([AnswerSheet]),
    HttpModule
  ],
  controllers: [ExamController],
  providers: [ExamService, ExamPackingClient],
})
export class ExamModule {}
