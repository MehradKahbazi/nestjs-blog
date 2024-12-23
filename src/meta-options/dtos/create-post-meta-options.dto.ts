import { IsJSON, IsNotEmpty } from "class-validator";

export class CreateProstMetaOptionsDto{
    @IsJSON()
    @IsNotEmpty()
    metaValue: string;
}