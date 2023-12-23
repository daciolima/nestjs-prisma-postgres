// import { PartialType } from '@nestjs/mapped-types';
import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

// PartialType torna as entradas das propriedades da entity User opcional, recebendo tudo ou parte.
export class UpdateUserDto extends PartialType(CreateUserDto) {}
