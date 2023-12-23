import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Posts')
@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @ApiForbiddenResponse({ description: 'Acesso negado!' }) // Resposta de status no Swagger
    @Post()
    create(@Body() createPostDto: CreatePostDto) {
        return this.postService.create(createPostDto);
    }

    @ApiForbiddenResponse({ description: 'Acesso negado!' })
    @Get()
    findAll() {
        return this.postService.findAll();
    }

    @ApiForbiddenResponse({ description: 'Acesso negado!' })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.postService.findOne(+id);
    }

    @ApiForbiddenResponse({ description: 'Acesso negado!' })
    @Put(':id')
    update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
        return this.postService.update(+id, updatePostDto);
    }

    @ApiForbiddenResponse({ description: 'Acesso negado!' })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.postService.remove(+id);
    }
}
