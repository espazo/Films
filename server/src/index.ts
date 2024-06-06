import 'reflect-metadata';
import {MovieModel} from './db/db';

MovieModel.find().then(ms => {
    console.log(ms);
});

console.log(MovieModel);
