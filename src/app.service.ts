// Importation des modules nécessaires depuis NestJS
import { Injectable } from '@nestjs/common';

// Définition d'un service nommé "AppService"
@Injectable()
export class AppService {
  // Définition d'une méthode qui renvoie une chaîne de caractères
  getHello(): string {
    return 'Hello World!';
  }
}
