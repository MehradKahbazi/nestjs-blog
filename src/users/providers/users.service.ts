import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
/**
 * Class to connect to users table and perform business operations
 */
@Injectable()
export class UsersService {

    constructor(
        /**
         * Injecting usersRepository
         */
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ){}

    /**
     * 
     * mehtod to create a new user
     */

        public async createUser(CreateUserDto: CreateUserDto){

            const existingUser = await this.usersRepository.findOne({
                where:{ email: CreateUserDto.email}
            })

            let newUser = this.usersRepository.create(CreateUserDto);
            newUser = await this.usersRepository.save(newUser)

            return newUser;

        }

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
