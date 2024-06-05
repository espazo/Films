import {ArrayMinSize, IsInt, IsNotEmpty, Max, Min} from 'class-validator';

export class Movie {
    @IsNotEmpty({message: '电影名称不能为空'})
    public name: string;

    @IsNotEmpty({message: '电影类型不能为空'})
    @ArrayMinSize(1, {message: '电影类型至少一个'})
    public types: string[];

    @IsNotEmpty({message: '上映地区不能为空'})
    @ArrayMinSize(1, {message: '上映地区至少一个'})
    public areas: string[];

    @IsNotEmpty({message: '时长不能为空'})
    @IsInt({message: '时长必须是整数'})
    @Min(1, {message: '时长最小一分钟'})
    @Max(999999, {message: '时长过长'})
    public timeLong: number;

    @IsNotEmpty({message: '是否热映不能为空'})
    public isNot: boolean = false;

    @IsNotEmpty({message: '是否即将上映不能为空'})
    public isComing: boolean = false;

    @IsNotEmpty({message: '是否是经典影片'})
    public isClassic: boolean = false;

    public description?: string;

    public poster?: string;
}
