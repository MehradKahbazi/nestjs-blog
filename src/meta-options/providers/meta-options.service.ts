import { Injectable } from '@nestjs/common';
import { CreateProstMetaOptionsDto } from '../dtos/create-post-meta-options.dto';
import { Repository } from 'typeorm';
import { MetaOption } from '../meta-option.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MetaOptionsService {
    constructor(
        /**
         * Inject metaOptionsRepository
         */
        @InjectRepository(MetaOption)
        private readonly metaOptionsRepository: Repository<MetaOption>
    ){}


    public async create(createProstMetaOptionsDto: CreateProstMetaOptionsDto){

        let metaOption = this.metaOptionsRepository.create(createProstMetaOptionsDto)
        return await this.metaOptionsRepository.save(metaOption);
    }
}
