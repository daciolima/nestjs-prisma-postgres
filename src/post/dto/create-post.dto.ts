import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
    @ApiProperty({ description: 'Título do post' }) // Descrição sobre campo a ser mostrado schema no recurso mostrado no Swagger
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({ description: 'Conteúdo do post' })
    @IsString()
    @IsOptional()
    content?: string;

    @ApiProperty({ description: 'Email do usuário' })
    @IsEmail()
    authorEmail: string;
}
