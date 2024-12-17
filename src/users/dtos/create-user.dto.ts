import { IsString, IsNotEmpty, IsOptional, IsEmail, MinLength, MaxLength, Matches } from "class-validator";

export class createUserDto{
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(96)
    firstName: string;

    @IsString()
    @IsOptional()
    @MinLength(3)
    @MaxLength(96)
    lastName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
        message:
          'Minimum eight characters, at least one letter, one number and one special character',
      })
    passsword: string;
}