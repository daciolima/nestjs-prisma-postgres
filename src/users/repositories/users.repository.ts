// Metodos das operações de CRUD com o banco

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserEntity } from '../entities/user.entity';
import { UpdateUserDto } from '../dto/update-user.dto';

// EXECUTA O CRUD DE CADA ENTITY JUNTO AO BANCO
@Injectable()
export class UsersRepository {
    constructor(private readonly prisma: PrismaService) {}

    // Recebe o dado tratado pela regra no service e grava através do Prisma no Database
    async create(createUserDto: CreateUserDto): Promise<UserEntity> {
        return this.prisma.user.create({
            data: createUserDto,
            include: {
                posts: {
                    select: {
                        title: true,
                        createdAt: true,
                    },
                },
            },
        });
    }
    async findAll(): Promise<UserEntity[]> {
        return this.prisma.user.findMany({
            include: {
                posts: {
                    select: {
                        title: true,
                        createdAt: true,
                    },
                },
            },
        });
    }

    async findOne(id: number): Promise<UserEntity> {
        return this.prisma.user.findUnique({
            where: {
                id,
            },
            include: {
                posts: {
                    select: {
                        title: true,
                        createdAt: true,
                    },
                },
            },
        });
    }

    async update(
        id: number,
        updateUserDto: UpdateUserDto,
    ): Promise<UserEntity> {
        return this.prisma.user.update({
            where: {
                id,
            },
            data: updateUserDto,
            include: {
                posts: {
                    select: {
                        title: true,
                        createdAt: true,
                    },
                },
            },
        });
    }

    async remove(id: number): Promise<UserEntity> {
        return this.prisma.user.delete({
            where: {
                id,
            },
        });
    }
}
