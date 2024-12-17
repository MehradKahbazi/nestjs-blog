import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';

@Injectable()
export class PostsService {
    public findAll(
        getUsersParamDto : GetUsersParamDto,
        limit: number,
        page :number,
    ){
        return[
            {
                firstName: 'John',
                email: 'John@Doe.com'
            },
            {
                firstName: 'Alice',
                email: 'Alice@Doe.com'
            },
        ]
    }
}
