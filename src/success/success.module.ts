import { Module } from '@nestjs/common';
import { SuccessService } from './success.service';
import { SuccessController } from './success.controller';

@Module({
  providers: [SuccessService],
  controllers: [SuccessController]
})
export class SuccessModule {}
