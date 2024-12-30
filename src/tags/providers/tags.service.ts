import { Injectable } from '@nestjs/common';
import { CreateTagDto } from '../dtos/create-tag.dto';
import { Repository } from 'typeorm';
import { Tag } from '../tag.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TagsService {
    constructor(
        /**
         * inject tagsRepository
         */
        @InjectRepository(Tag)
        private readonly tagsRepository: Repository<Tag>
    ){}
    public async create(createTagDto: CreateTagDto){
    }
}
