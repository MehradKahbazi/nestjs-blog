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
import { UsersService } from './providers/users.service';
import { ApiTags } from '@nestjs/swagger/dist';

@Controller('users')
@ApiTags('Users')
export class UsersController {


  constructor(private readonly usersService: UsersService){}

  @Get('/:id?')
  public getUsers(
    @Param() getUsersParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {

    return this.usersService.findAll(getUsersParamDto, limit, page);
    
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
