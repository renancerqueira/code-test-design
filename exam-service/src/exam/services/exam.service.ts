import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AnswerSheet } from '../entities/answer-sheet.entity';
import { StartExamResponseDto } from '../dto/start-exam-response.dto';
import { UUID } from 'src/common/uuid.class';
import { Status } from 'src/common/enums/status.enum';
import { ExamPackingClient } from 'src/clients/exam-packing.client';

@Injectable()
export class ExamService {
  constructor(
    @InjectRepository(AnswerSheet)
    private readonly answerSheetRepository: Repository<AnswerSheet>,
    private readonly examPackingClient: ExamPackingClient, // Injetando o client
  ) {}

  async startExam(answerSheetId: string): Promise<StartExamResponseDto> {
    let answerSheet = await this.answerSheetRepository.findOne({ where: { id: answerSheetId } });
    
    if (!answerSheet) {
      answerSheet = await this.createNewAnswerSheet();
    } else if (answerSheet.status === Status.NOT_STARTED) {
      answerSheet = await this.startExistingAnswerSheet(answerSheet);
    }

    // Usando o client para obter o conteúdo do exame
    const content = await this.examPackingClient.generateExamContent(answerSheet.formId);

    return { content };
  }

  private async createNewAnswerSheet(): Promise<AnswerSheet> {
    const candidateId = UUID.generate(); // Id do usuário logado
    const formId = UUID.generate(); // Id do formulário recuperado de outro serviço
    
    const newAnswerSheet = this.answerSheetRepository.create(new AnswerSheet(candidateId, formId));

    return this.startExistingAnswerSheet(newAnswerSheet);
  }

  private async startExistingAnswerSheet(answerSheet: AnswerSheet): Promise<AnswerSheet> {
    answerSheet.start();
    return await this.answerSheetRepository.save(answerSheet);
  }
}
