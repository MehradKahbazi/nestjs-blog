import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { TagsModule } from './tags/tags.module';
import { MetaOptionsModule } from './meta-options/meta-options.module';

@Module({
  imports: [UsersModule, PostsModule,
  TypeOrmModule.forRootAsync({
    imports:[],
    inject:[],
    useFactory: () => ({
      type: 'postgres',
      entities:[User],
      synchronize: true,
      port: 5432,
      username: 'postgres',
      password: 'Metallica1993',
      host: 'localhost',
      database: 'nestjs-blog'
    })
  }),
  TagsModule,
  MetaOptionsModule
  ] 
})
export class AppModule {}
