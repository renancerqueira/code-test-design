import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Enrollment } from '../entities/enrollment.entity';
import { CreateEnrollmentDto } from '../dto/create-enrollment.dto';
import { EnrollmentResponseDto } from '../dto/create-enrollment-response.dto';

@Injectable()
export class EnrollmentService {
  constructor(
    @InjectRepository(Enrollment)
    private readonly enrollmentRepository: Repository<Enrollment>,
  ) {}

  async createEnrollment(createEnrollmentDto: CreateEnrollmentDto): Promise<Enrollment> {
    const enrollment = this.enrollmentRepository.create(createEnrollmentDto);
    return this.enrollmentRepository.save(enrollment);
  }
}
