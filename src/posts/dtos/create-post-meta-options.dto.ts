import { IsNotEmpty, IsString } from "class-validator";

export class CreateProstMetaOptionsDto{
    @IsString()
    @IsNotEmpty()
    key: string;

    @IsNotEmpty()
    value:any;
}