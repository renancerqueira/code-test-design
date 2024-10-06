import { Controller, Post, Param } from '@nestjs/common';
import { ExamService } from '../services/exam.service';
import { StartExamResponseDto } from '../dto/start-exam-response.dto';
import { ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('exam')
@Controller('start')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Post(':answerSheetId')
  @ApiResponse({ status: 200, description: 'Exame iniciado com sucesso', type: StartExamResponseDto })
  @ApiParam({ name: 'answerSheetId', description: 'UUID da AnswerSheet' })
  async startExam(@Param('answerSheetId') answerSheetId: string): Promise<StartExamResponseDto> {
    const result = await this.examService.startExam(answerSheetId);
    return result;
  }
}
