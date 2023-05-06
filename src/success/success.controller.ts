import { Body, Controller, Get, Post } from '@nestjs/common';
import { timeInterval } from 'rxjs';
import { Success } from './success.model';
import { SuccessService } from './success.service';

@Controller('success')
export class SuccessController {
  @Get()
  getAllSuccess(): Success[] {
    return [
      {
        id: 1,
        timeTakenMs: 1000,
        created_at: new Date(),
      },
    ];
  }

  @Post()
  createSuccess( @Body() id: number, @Body() timeTakenMs: number, @Body() created_at : Date): Success {  
    return {
      id: id,
      timeTakenMs: timeTakenMs,
      created_at: created_at,
    };
  }
}
