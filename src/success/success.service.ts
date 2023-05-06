import { Success } from './success.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Timestamp } from 'typeorm';

@Injectable()
export class SuccessService {

  // constructor(
  //   @InjectRepository(Success)
  //   private successService: SuccessService,
  // ) {}
  

  // async createSuccess(
  //   id: number,
  //   timeTakenMs: number,
  //   created_at: Date,
  // ): Promise<Success> {
  //   const success = new Success();
  //   success.id = id;
  //   success.timeTakenMs = timeTakenMs;
  //   success.created_at = created_at;
  //   // await success.save();

  //   return success;
  // }
}
