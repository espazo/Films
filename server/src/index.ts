import 'reflect-metadata';
import {MovieService} from "./services/MovieService";

function getRandom(min: number, max: number) {
    const dec = max - min;
    return Math.floor(Math.random() * dec + min);
}

const condi: any = {
    page: 2,
    limit: 5,
    key: '10',
};
MovieService.find(condi).then(result => {
    if (result.errors.length > 0) {
        console.log(result.errors);
    } else {
        result.data.forEach(m => {
            console.log(m.name);
        });
        console.log('total', result.count);
    }
});
