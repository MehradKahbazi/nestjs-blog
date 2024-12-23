import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { postType } from "./enums/postType.enum";
import { postStatus } from "./enums/postStatus.enum";
import { CreateProstMetaOptionsDto } from "../meta-options/dtos/create-post-meta-options.dto";

@Entity()
export class Post{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type: 'varchar',
        length: 512,
        nullable: false
    })
    title: string;

    @Column({
        type:'enum',
        enum: postType,
        nullable: false,
        default: postType.POST
    })
    postType: postType;

    @Column({
        type: 'varchar',
        length: 256,
        nullable: false,
        unique: true
    })
    slug: string;

    @Column({
        type:'enum',
        enum: postStatus,
        nullable: false,
        default: postStatus.DRAFT
    })
    postStatus: postStatus;

    @Column({
        type: 'text',
        nullable: true,
    })
    content?: string;

    @Column({
        type: 'text',
        nullable: true
    })
    schema?: string;

    @Column({
        type: 'varchar',
        length:1024,
        nullable: true
    })
    featuredImage?: string;

    @Column({
        type: 'timestamp',
        nullable: true
    })
    publishedOn?: Date;


    // 
    tags?: string[];
    metaOptions?: CreateProstMetaOptionsDto[];


}