import { PrismaService } from 'src/prisma/prisma.service';
import { PostEntity } from '../entities/post.entity';
import { UpdatePostDto } from '../dto/update-post.dto';
import { CreatePostDto } from '../dto/create-post.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostRepository {
    constructor(private readonly prisma: PrismaService) {}

    // Recebe o dado tratado pela regra no service e grava através do Prisma no Database
    async create(createPostDto: CreatePostDto): Promise<PostEntity> {
        return this.prisma.post.create({
            data: createPostDto,
        });
    }
    async findAll(): Promise<PostEntity[]> {
        return this.prisma.post.findMany({});
    }

    async findOne(id: number): Promise<PostEntity> {
        return this.prisma.post.findUnique({
            where: {
                id,
            },
        });
    }

    async update(
        id: number,
        updatePostDto: UpdatePostDto,
    ): Promise<PostEntity> {
        return this.prisma.post.update({
            where: {
                id,
            },
            data: updatePostDto,
        });
    }

    async remove(id: number): Promise<PostEntity> {
        return this.prisma.post.delete({
            where: {
                id,
            },
        });
    }
}
