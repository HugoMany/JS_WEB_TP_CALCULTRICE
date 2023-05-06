// Importation des modules nécessaires depuis NestJS
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");

// Définition d'une fonction asynchrone nommée "bootstrap()"
async function bootstrap() {
    // Création d'une instance de l'application en utilisant le module "AppModule"
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    // Lancement de l'application en écoutant les requêtes sur le port 3000
    await app.listen(3000);
}

// Appel de la fonction "bootstrap()" pour démarrer l'application
bootstrap();