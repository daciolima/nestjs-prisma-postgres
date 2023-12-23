import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiForbiddenResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

// EXECUTA O CONTROLE DE ROTAS
@ApiTags('Users')
@Controller('users/')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @ApiResponse({ status: 409, description: 'Email já existe!' }) // Resposta de status no Swagger
    @ApiForbiddenResponse({ description: 'Acesso negado!' })
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto); // Dados entra pra o referido service
    }

    @ApiForbiddenResponse({ description: 'Acesso negado!' })
    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @ApiForbiddenResponse({ description: 'Acesso negado!' })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id);
    }

    @ApiForbiddenResponse({ description: 'Acesso negado!' })
    @Put(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(+id, updateUserDto);
    }

    @ApiForbiddenResponse({ description: 'Acesso negado!' })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.remove(+id);
    }
}
