import express from 'express';
const app = express();
import { ConnectDB} from './DB/Connection.js';
import  router from './src/Models/Users/UserRouter.js';

ConnectDB();

app.get('/user',router);


app.listen(3000,()=>{
    console.log('server is running ..... 3000');
    });