import 'reflect-metadata';
import {MovieService} from "./services/MovieService";


const m: any = {
    name: '流浪地球',
    // name: 'movie name',
    // poster: 'movie poster',
    // description: 'description',
    // timeLong: 33,
    // types: ['喜剧'],
    // areas: ['中国大陆'],
};

// MovieService.edit('6663c8d7453e30424b43c775', m).then(result => {
//     console.log('edit', result);
// });

// MovieService.delete('6663c8d7453e30424b43c775').then(() => {
//     console.log('delete success');
// });

MovieService.find('6663c8d365e37d86f2750bf3').then(res => {
    console.log(res);
});
