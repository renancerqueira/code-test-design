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
    enum: ['NOT_STARTED', 'STARTED', 'SUBMITTED'],
    default: 'NOT_STARTED',
  })
  status: 'NOT_STARTED' | 'STARTED' | 'SUBMITTED';

  @Column({ nullable: true })
  startedAt: Date;

  @Column({ nullable: true })
  submittedAt: Date;
}
