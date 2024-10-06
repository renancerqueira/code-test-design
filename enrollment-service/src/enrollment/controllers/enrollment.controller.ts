import { Controller, Post, Body } from '@nestjs/common';
import { EnrollmentService } from '../services/enrollment.service';
import { CreateEnrollmentDto } from '../dto/create-enrollment.dto';
import { EnrollmentResponseDto } from '../dto/create-enrollment-response.dto';
import { ApiTags, ApiResponse, ApiOkResponse } from '@nestjs/swagger';

@ApiTags('enrollments')
@Controller('enrollment')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Post()
  @ApiOkResponse({
    description: 'Inscrição criada com sucesso.',
    type: EnrollmentResponseDto
  })
  @ApiResponse({ status: 400, description: 'Parâmetros inválidos.' })
  async createEnrollment(@Body() createEnrollmentDto: CreateEnrollmentDto): Promise<EnrollmentResponseDto> {
    const enrollment = await this.enrollmentService.createEnrollment(createEnrollmentDto);
    return new EnrollmentResponseDto(enrollment.id);
  }
}
