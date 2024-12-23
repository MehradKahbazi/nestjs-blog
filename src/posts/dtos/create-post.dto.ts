import { IsArray, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MaxLength, MinLength, ValidateNested } from 'class-validator';
import { postStatus } from '../enums/postStatus.enum';
import { postType } from '../enums/postType.enum';
import { CreateProstMetaOptionsDto } from '../../meta-options/dtos/create-post-meta-options.dto';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePostDto {
  @IsString()
  @MinLength(4)
  @MaxLength(512)
  @IsNotEmpty()
  @ApiProperty({
    description: 'This takes in blog post title',
    example: 'Test Blog Title'
  })
  title: string;

  @IsEnum(postType)
  @IsNotEmpty()
  @ApiProperty({
    description:' this takes in post type.possiblr values: "post", "page", "story", "series"',
    example: 'blog'
  })
  postType: postType;

  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be all small letters and uses only "-" and without spaces. For example "my-url"',
  })
  @ApiProperty({
    description: 'takes in blog slug',
    example: 'my-blog'
  })
  slug: string;

  @IsEnum(postStatus)
  @IsNotEmpty()
  @ApiProperty({
    enum: postStatus,
    description: 'published status. possiblr values: "draft", "scheduled", "review", "published"',
    example: 'draft',
  })
  status: postStatus;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Takes in blog post content',
    example: 'new blog post'
  })
  constent?: string;

  @IsJSON()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'serialize your JSON object or else a validation error will be thrown',
    example: '{\r\n \"@context\": \"https:\/\/schema.org\",\r\n \"@type\": \"Person\"\r\n }'
  })
  schema?: string;

  @IsUrl()
  @IsOptional()
  @MaxLength(1024)
  @ApiPropertyOptional({
    description: 'takes in featured image url',
    example: 'http://localhost.com/images/image1.jpg' 
  })
  featuredImageUrl: string;

  @IsISO8601()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Date on which the blog post was published',
    example: '2024-03-16T07:46:32+0000'
  })
  publishedOn?: Date;

  @IsOptional()
  @IsArray()
  @IsString({each: true})
  @MinLength(3, {each: true})
  @ApiPropertyOptional({
    description: 'An array of tags pased as string values',
    example: ['nestJs', 'typescript']
  })
  tags?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({each: true})
  @Type(() => CreateProstMetaOptionsDto)
  @ApiPropertyOptional({
    type: 'array',
    required: false,
    items:{
      type: 'object',
      properties:{
        metaValue:{
          type: 'json',
          description: 'MetaValue is a json string',
          example: '{"sidebar-enabled": "true"}'
        },
       
      }
    },
    
  })
  metaOptions?: CreateProstMetaOptionsDto | null;
}
