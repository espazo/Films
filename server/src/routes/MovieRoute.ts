import Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
    res.send('get request');
});

router.post('/', (req, res) => {
    res.send('post request');
});

router.put('/', (req, res) => {
    res.send('post request');
});

router.delete('/', (req, res) => {
    res.send('delete request');
});

export default router;
