import { IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEnrollmentDto {
  @ApiProperty({
    description: 'UUID do candidato',
    example: 'a3bb88a7-8b1f-4cd9-847b-17e9f39f9f0f'
  })
  @IsUUID()
  candidateId: string;

  @ApiProperty({
    description: 'UUID do formulário',
    example: 'b4cc88a7-8b1f-4cd9-847b-27e9f39f9e0e'
  })
  @IsUUID()
  formId: string;
}
