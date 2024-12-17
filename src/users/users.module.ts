import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { PostsService } from './providers/posts.service';

@Module({
  controllers: [UsersController],
  providers: [PostsService]
})
export class UsersModule {}
