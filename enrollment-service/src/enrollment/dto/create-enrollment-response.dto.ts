import { ApiProperty } from '@nestjs/swagger';

export class EnrollmentResponseDto {
  constructor (enrollmentId: string) {
    this.enrollmentId = enrollmentId;
  }

  @ApiProperty({
    description: 'UUID da inscrção do candidato',
    example: 'a3bb88a7-8b1f-4cd9-847b-17e9f39f9f0f'
  })
  enrollmentId: string;
}
  