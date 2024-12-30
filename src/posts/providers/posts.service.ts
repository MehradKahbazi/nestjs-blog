import { Injectable, Body } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { TagsService } from 'src/tags/providers/tags.service';
import { PatchPostDto } from '../dtos/patch-post.dto';

@Injectable()
export class PostsService {
    constructor(
        /**
         * injecting userService
         */
        private readonly usersService: UsersService,
        /**
         * injecting postsRepository
         */
        @InjectRepository(Post)
        private readonly postsRepository: Repository<Post>,

        /**
         * injecting metaOptionsRepository
         */
        @InjectRepository(MetaOption)
        public readonly metaOptionsRepository: Repository<MetaOption>,

        /**
         * injet tagsService
         */
        
        private readonly tagsService: TagsService,
        
    ){}

    /**
     * Creating new posts
     */

    public async create(@Body() createPostDto: CreatePostDto){
        
        
        let author= await this.usersService.findOneById(createPostDto.authorId)

        // find tags
        let tags = await this.tagsService.findMultipleTags(createPostDto.tags)

        let post = this.postsRepository.create({...createPostDto, author: author, tags: tags})

        return await this.postsRepository.save(post)
    }


    /**
     * returning all posts
     */
    public async findAll(userId: number){
        
        
        let posts = await this.postsRepository.find()

        return posts
    }

    /**
     * deleting a post and its related meta options along
     */

    public async delete(id: number){

        await this.postsRepository.delete(id)

        return {
            deleted: true, id,
        }
    }

    /**
     * update posts
     */

    public async update(patchPostDto: PatchPostDto){

    }
}
