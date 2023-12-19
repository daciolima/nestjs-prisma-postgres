import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // conf prisma
    app.enableShutdownHooks();
    // Validation type
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true, // lista com propriedades aceitáveis descritas nos DTOs.
            forbidNonWhitelisted: true, // Rejeita requisições fora do whitelist.
            transform: true, // Transforma os dados conforme DTO.
        }),
    );

    await app.listen(process.env.PORT || 3000);
}
bootstrap();
