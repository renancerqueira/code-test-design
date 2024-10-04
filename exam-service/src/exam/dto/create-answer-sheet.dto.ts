import { IsUUID, IsString } from 'class-validator';

export class CreateAnswerSheetDto {
  @IsUUID()
  formId: string;

  @IsUUID()
  candidateId: string;

  @IsString()
  status: string;
}
