import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';

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
  })
  ] 
})
export class AppModule {}
