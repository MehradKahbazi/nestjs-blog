import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiTags } from '@nestjs/swagger/dist/decorators';
import { CreatePostDto } from './dtos/create-post.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
    constructor(private readonly postsService : PostsService){}

    @Get('/:userId?')
    public getPosts(
        @Param('userId') userId : string
    ){
        console.log('controller');
        
        return this.postsService.findAll(userId);
    }

    @Post()
    public createPost(
        @Body() createPostDto: CreatePostDto
    ){

    }
}
