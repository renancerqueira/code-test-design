import { Controller, Post, Body } from '@nestjs/common';
import { ExamService } from '../services/exam.service';
import { CreateAnswerSheetDto } from '../dto/create-answer-sheet.dto';
import { AnswerSheet } from '../entities/answer-sheet.entity';

@Controller('exam')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Post('start')
  async createAnswerSheet(@Body() createAnswerSheetDto: CreateAnswerSheetDto): Promise<AnswerSheet> {
    return this.examService.createAnswerSheet(createAnswerSheetDto);
  }
}
