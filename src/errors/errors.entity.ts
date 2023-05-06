import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from 'typeorm';

@Entity('errors')
export class Errors {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  error_at: Timestamp;

  @Column()
  created_at: Date;
}
