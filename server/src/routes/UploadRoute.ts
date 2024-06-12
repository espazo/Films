import Express from 'express';
import multer from 'multer';
import path from 'path';
import {ResponseHelper} from "./ResponseHelper";

const router = Express.Router();

const storage = multer.diskStorage({
    destination: path.resolve(__dirname, '../../public/upload'),
    filename(req, file, cb) {
        const time = new Date().getTime();
        const extname = path.extname(file.originalname);
        cb(null, `${time}${extname}`);
    },
});

console.log(path.resolve(__dirname, '../../public/upload'));

const allowedExtensions = ['.jpg', '.png', '.gif', '.bmp', '.jiff'];
const upload = multer({
    storage,
    limits: {
        fileSize: 1024 * 1024
    },
    fileFilter(req, file, cb) {
        const ext = path.extname(file.originalname);
        if (allowedExtensions.includes(ext)) {
            cb(null, true);
        } else {
            cb(new Error('file type is illegal') as any, false);
        }
    }
}).single('imgfile');

router.post('/', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            ResponseHelper.sendError(err.message, res);
        } else {
            const url = `/upload/${req.file?.filename}`;
            ResponseHelper.sendData(url, res);
        }
    });
});

export default router;
