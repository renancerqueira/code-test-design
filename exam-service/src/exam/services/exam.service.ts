import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AnswerSheet } from '../entities/answer-sheet.entity';
import { StartExamResponseDto } from '../dto/start-exam-response.dto';
import { UUID } from 'src/common/uuid.class';
import { Status } from 'src/common/enums/status.enum';
import { ExamPackingClient } from 'src/clients/exam-packing.client';
import * as moment from 'moment';

@Injectable()
export class ExamService {
  constructor(
    @InjectRepository(AnswerSheet)
    private readonly answerSheetRepository: Repository<AnswerSheet>,
    private readonly examPackingClient: ExamPackingClient, // Injetando o client
  ) {}

  async startExam(answerSheetId: string): Promise<StartExamResponseDto> {
    let start = moment();
    let answerSheet = await this.answerSheetRepository.findOne({ where: { id: answerSheetId } });
    let end = moment();
    let duration = end.diff(start, 'milliseconds');
    console.log(`AnswerSheet FindOne time: ${duration}ms`);
    start = moment();
    
    if (!answerSheet) {
      const newAnswerSheet = this.answerSheetRepository.create({
        id: answerSheetId,
        status: Status.STARTED,
        startedAt: new Date(),
        candidateId: UUID.generate(),
        formId: UUID.generate()
      });
      answerSheet = await this.answerSheetRepository.save(newAnswerSheet);
    } else if (answerSheet.status === Status.NOT_STARTED) {
      answerSheet.status = Status.STARTED;
      answerSheet.startedAt = new Date();
      await this.answerSheetRepository.save(answerSheet);
    }
    end = moment();
    duration = end.diff(start, 'milliseconds');
    console.log(`AnswerSheet save time: ${duration}ms`);
    start = moment();

    // Usando o client para obter o conteúdo do exame
    const content = await this.examPackingClient.generateExamContent(answerSheet.formId);
    end = moment();
    duration = end.diff(start, 'milliseconds');
    console.log(`ExamPacking client request time: ${duration}ms`);

    return { content };
  }
}
