import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger/dist/decorators";

export class GetUsersParamDto{
    @ApiPropertyOptional({
        description: 'Get User with specific Id',
        example: 1234,
    })
    @IsOptional()
    @IsInt()
    @Type(() => Number)
    id?: number
}