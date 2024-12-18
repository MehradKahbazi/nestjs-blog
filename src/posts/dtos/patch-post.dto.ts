import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";
import { CreatePostDto } from "./create-post.dto";

export class PatchPostDto extends PartialType(CreatePostDto) {
    @ApiProperty({
        description: 'Takes in the post Id',
        example: '1234'
    })
    @IsInt()
    @IsNotEmpty()
    id:number;
}