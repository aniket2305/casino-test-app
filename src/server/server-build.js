import 'babel-polyfill';
import express from 'express';
import route from './routes';

const port = process.env.PORT || 3000;

const app = express();

app.use('/', express.static('./dist/client/'));

app.use('/api', route());

app.listen(port, ()=>{
    console.log(`server listening at port: ${port}`);
});



