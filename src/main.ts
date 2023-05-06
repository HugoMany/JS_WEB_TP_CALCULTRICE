// Importation des modules nécessaires depuis NestJS
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Définition d'une fonction asynchrone nommée "bootstrap"
async function bootstrap() {
  // Création d'une instance d'application NestJS avec l'AppModule
  const app = await NestFactory.create(AppModule);
  // Démarrage de l'application sur le port 3000
  await app.listen(3000);
}

// Appel de la fonction "bootstrap" pour démarrer l'application
bootstrap();
