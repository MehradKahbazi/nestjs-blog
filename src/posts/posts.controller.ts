import { Controller, Get, Param, Post, Body, Patch } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist/decorators';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-post.dto';

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

    @ApiOperation({
        summary: 'Creates a new blog post'
    })
    @ApiResponse({
        status: 201,
        description: 'You\'ll get a 201 response if your post is successfuly created'
    })
    @Post()
    public createPost(
        @Body() createPostDto: CreatePostDto
    ){
        console.log(createPostDto);
        
    }

    @Patch()
    public updatePost(
        @Body() patchPostsDto : PatchPostDto
    ){
        console.log(patchPostsDto);
        
    }
}
