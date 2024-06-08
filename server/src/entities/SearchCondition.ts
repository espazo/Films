import {IsInt, IsString, Min} from "class-validator";
import {Type} from "class-transformer";
import {BaseEntity} from "./BaseEntity";

export class SearchCondition extends BaseEntity {
    @IsInt({message: '页码必须是整数'})
    @Min(1, {message: '页码最小值为 1'})
    @Type(() => Number)
    public page: number = 1;

    @IsInt({message: '页容量必须是整数'})
    @Type(() => Number)
    @Min(1, {message: '页容量最小值为 1'})
    public limit: number = 10;

    @IsString({message: '关键字必须是字符串'})
    @Type(() => String)
    public key: string = "";

    public static transform(plainObject: object): SearchCondition {
        return super.baseTransform(SearchCondition, plainObject);
    }
}
