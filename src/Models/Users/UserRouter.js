import GetUsers from './UserServices.js';
import {Router} from 'express';
const router = Router();

router.get('/GetUser',GetUsers); // end point


export default router;