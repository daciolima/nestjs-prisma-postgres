import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ description: 'Email do usuário' }) // Descrição sobre campo a ser mostrado schema no recurso mostrado no Swagger
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ description: 'Nome completo do usuário' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: 'Se o usuário é ou não admin.',
        default: false,
    })
    @IsBoolean()
    admin: boolean;
}
