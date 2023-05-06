// Importation des modules nécessaires depuis NestJS
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuccessModule } from './success/success.module';
import { ErrorsModule } from './errors/errors.module';

// Définition d'un module d'application nommé "AppModule"
@Module({
  // Importation des autres modules nécessaires à l'application
  imports: [SuccessModule, ErrorsModule],
  // Définition des contrôleurs utilisés par l'application
  controllers: [AppController],
  // Définition des services utilisés par l'application
  providers: [AppService],
})
export class AppModule {}
