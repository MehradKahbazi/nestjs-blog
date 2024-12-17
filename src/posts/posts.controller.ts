import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiTags } from '@nestjs/swagger/dist/decorators';

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
}
