import { Controller, Get, Param, Post, Body, Patch, ParseIntPipe, Query, Delete } from '@nestjs/common';
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
        @Param('userId') userId : number
    ){
        
        
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
        
        return this.postsService.create(createPostDto);
        
    }

    @Patch()
    @ApiOperation({
        summary: 'Updates an existing blog post'
    })
    @ApiResponse({
        status: 200,
        description: 'returns a 200 response if the post is successfuly updated'
    })
    public updatePost(
        @Body() patchPostsDto : PatchPostDto
    ){
        console.log(patchPostsDto);
        
    }

    @Delete()
    public deletePost(@Query('id', ParseIntPipe) id: number){
        return this.postsService.delete(id)
    }
}
