import { Controller, Get } from '@nestjs/common';

@Controller('errors')
export class ErrorsController {
    @Get()
    getErrors() {
        console.log('Errors');
        return 'Errors';
    }
}
