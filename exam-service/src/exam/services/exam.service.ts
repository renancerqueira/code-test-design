import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAnswerSheetDto } from '../dto/create-answer-sheet.dto';
import { AnswerSheet } from '../entities/answer-sheet.entity';

@Injectable()
export class ExamService {
  constructor(
    @InjectRepository(AnswerSheet)
    private readonly answerSheetRepository: Repository<AnswerSheet>,
  ) {}

  async createAnswerSheet(createAnswerSheetDto: CreateAnswerSheetDto): Promise<AnswerSheet> {
    const answerSheet = this.answerSheetRepository.create(createAnswerSheetDto);
    return this.answerSheetRepository.save(answerSheet);
  }
}
