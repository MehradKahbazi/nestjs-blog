import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
/**
 * Class to connect to users table and perform business operations
 */
@Injectable()
export class UsersService {

    /**
     * method to get all the users from database
     * 
     */
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

    /**
     * method to get one users from database
     * 
     */

    public findOneById(id: string){
        return {
            firstName: 'Alice',
            email: 'Alice@Doe.com'
        }
    }


}
