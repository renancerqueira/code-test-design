import { ApiProperty } from '@nestjs/swagger';

export class StartExamResponseDto {
  @ApiProperty({
    description: 'Conteúdo do exame gerado',
    example: {
      questions: [],
    },
  })
  content: any;
}
