import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuccessModule } from './success/success.module';
import { ErrorsModule } from './errors/errors.module';

@Module({
  imports: [SuccessModule, ErrorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
