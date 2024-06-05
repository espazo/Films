import {validate} from "class-validator";
import {Movie} from "./entities/Movie";

const m = new Movie();
m.name = 'movie name';
m.types = ['喜剧'];
m.areas = ['中国大陆'];
m.isClassic = true;
m.timeLong = 1;

validate(m).then((error) => {
    console.log(error);
});
