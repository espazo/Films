import 'reflect-metadata';
import {validate} from "class-validator";
import {Movie} from "./entities/Movie";
import {plainToClass, plainToInstance} from "class-transformer";

const m = {} as any;
m.name = 'movie name';
m.types = ['喜剧'];
m.areas = ['中国大陆'];
m.isClassic = true;
m.timeLong = 1;

const movie = plainToInstance(Movie, m);
validate(movie).then((error) => {
    console.log(error);
});
