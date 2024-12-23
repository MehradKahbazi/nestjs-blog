import { Controller, Body, Post } from '@nestjs/common';
import { CreateProstMetaOptionsDto } from './dtos/create-post-meta-options.dto';
import { MetaOptionsService } from './providers/meta-options.service';

@Controller('meta-options')
export class MetaOptionsController {
    constructor(
        /**
         * inject MetaOptionsService
         */

        private readonly metaOptionsService: MetaOptionsService,
    ){}
    @Post()
    public create(@Body() createProstMetaOptionsDto: CreateProstMetaOptionsDto){
        this.metaOptionsService.create(createProstMetaOptionsDto)
    }
}
