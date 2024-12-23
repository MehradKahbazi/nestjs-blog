import { Injectable, Body } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';

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
         * inject metaOptionsRepository
         */
        @InjectRepository(MetaOption)
        public readonly metaOptionsRepository : Repository<MetaOption>
    ){}

    /**
     * Creating new posts
     */

    public async create(@Body() createPostDto: CreatePostDto){
        let metaOptions = createPostDto.metaOptions 
        ? this.metaOptionsRepository.create() 
        : null;

        if(metaOptions){
            await this.metaOptionsRepository.save(metaOptions)
        } 

        let post = this.postsRepository.create(createPostDto)

        if(metaOptions){
            post.metaOptions = metaOptions;
        }

        return await this.postsRepository.save(post)
    }

    /**
     * returning all posts
     */
    public findAll(userId: string){
        const user = this.usersService.findOneById(userId)
        console.log(user);
        
        return[
            {
                user: user,
                title: 'test title',
                content: 'test content'
            },
            {
                user: user,
                title: 'test title',
                content: 'test content'
            },
        ]
    }
}
