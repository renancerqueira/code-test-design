import { IsUUID } from 'class-validator';

export class CreateEnrollmentDto {
  @IsUUID()
  candidateId: string;

  @IsUUID()
  formId: string;
}
