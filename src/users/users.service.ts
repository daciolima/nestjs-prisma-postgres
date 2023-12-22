import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';
import { NotFoundError } from 'src/common/errors/NotFoundError';
import { UserEntity } from './entities/user.entity';
// import { UnauthorizedError } from 'src/common/errors/UnauthorizedError';

// EXECUTA A REGRA DE NEGÓCIO
@Injectable()
export class UsersService {
    constructor(private readonly repository: UsersRepository) {}

    create(createUserDto: CreateUserDto) {
        // Após tratado os dados pela regra, o mesmo é enviado para o repository
        return this.repository.create(createUserDto);
    }

    findAll() {
        // throw new UnauthorizedError('Não autorizado!');
        return this.repository.findAll();
    }

    async findOne(id: number): Promise<UserEntity> {
        const user = await this.repository.findOne(id);

        if (!user) {
            throw new NotFoundError('Usuário não encontrado!');
        }

        return user;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return this.repository.update(id, updateUserDto);
    }

    remove(id: number) {
        return this.repository.remove(id);
    }
}
