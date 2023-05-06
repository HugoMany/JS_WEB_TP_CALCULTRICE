import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('success')
export class Success {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  timeTakenMs: number;

  @Column()
  created_at: Date;
}
