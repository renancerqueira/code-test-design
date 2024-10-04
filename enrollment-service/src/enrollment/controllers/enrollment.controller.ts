import { Controller, Post, Body } from '@nestjs/common';
import { EnrollmentService } from '../services/enrollment.service';
import { CreateEnrollmentDto } from '../dto/create-enrollment.dto';
import { Enrollment } from '../entities/enrollment.entity';

@Controller('enrollment')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Post()
  async createEnrollment(@Body() createEnrollmentDto: CreateEnrollmentDto): Promise<Enrollment> {
    return this.enrollmentService.createEnrollment(createEnrollmentDto);
  }
}
