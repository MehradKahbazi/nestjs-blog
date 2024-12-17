import {
  Body,
  Controller,
  Get,
  Headers,
  Ip,
  Param,
  ParseIntPipe,
  Post,
  Query,
  DefaultValuePipe,
  Patch,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';

@Controller('users')
export class UsersController {
  @Get('/:id?')
  public getUsers(
    @Param() getUsersParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(getUsersParamDto);
    return 'You sent a get request to users endpoint';
  }

  @Post()
  public createUsers(
    @Body() createUserDto: CreateUserDto,
    @Headers() headers: any,
    @Ip() ip: any,
  ) {
    console.log(headers);
    console.log(ip);
    return 'You sent a post request to users endpoint';
  }

  @Patch()
  public editUser(
    @Body() patchUserDto: PatchUserDto
  ){

  }
}
