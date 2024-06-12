import 'reflect-metadata';
import Express from 'express';
import MovieRouter from './routes/MovieRoute';
import UploadRouter from './routes/UploadRoute';

const app = Express();

app.use(Express.json());

app.use('/upload', Express.static('public/upload'));
app.use('/api/movie', MovieRouter);
app.use('/api/upload', UploadRouter);

app.listen(3000);
