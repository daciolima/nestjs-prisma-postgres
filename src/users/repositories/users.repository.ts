// Metodos das operações de CRUD com o banco

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserEntity } from '../entities/user.entity';
import { UpdateUserDto } from '../dto/update-user.dto';

// EXECUTA O CRUD DE CADA ENTITY JUNTO AO BANCO
@Injectable()
export class UsersRepository {
    constructor(private readonly prima: PrismaService) {}

    // Recebe o dado tratado pela regra no service e grava através do Prisma no Database
    async create(createUserDto: CreateUserDto): Promise<UserEntity> {
        return this.prima.user.create({
            data: createUserDto,
        });
    }
    async findAll(): Promise<UserEntity[]> {
        return this.prima.user.findMany({});
    }

    async findOne(id: number): Promise<UserEntity> {
        return this.prima.user.findUnique({
            where: {
                id,
            },
        });
    }

    async update(
        id: number,
        updateUserDto: UpdateUserDto,
    ): Promise<UserEntity> {
        return this.prima.user.update({
            where: {
                id,
            },
            data: updateUserDto,
        });
    }

    async remove(id: number): Promise<UserEntity> {
        return this.prima.user.delete({
            where: {
                id,
            },
        });
    }
}
