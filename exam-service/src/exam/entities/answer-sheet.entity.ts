import { Status } from 'src/common/enums/status.enum';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class AnswerSheet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  candidateId: string;

  @Column()
  formId: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.NOT_STARTED,
  })
  status: Status;

  @Column({ nullable: true })
  startedAt: Date;

  @Column({ nullable: true })
  submittedAt: Date;

  // Construtor básico
  constructor(candidateId: string, formId: string) {
    this.candidateId = candidateId;
    this.formId = formId;
    this.status = Status.NOT_STARTED;
  }

  // Método para iniciar
  start() {
    if (this.status !== Status.NOT_STARTED) {
      throw new Error('Cannot start an AnswerSheet that has already been started or completed.');
    }
    this.status = Status.STARTED;
    this.startedAt = new Date();
  }
}
