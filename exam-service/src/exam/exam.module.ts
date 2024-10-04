import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamController } from './controllers/exam.controller';
import { ExamService } from './services/exam.service';
import { AnswerSheet } from './entities/answer-sheet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AnswerSheet])],
  controllers: [ExamController],
  providers: [ExamService],
})
export class ExamModule {}
