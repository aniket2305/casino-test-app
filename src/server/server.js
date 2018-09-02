
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import route from './routes';

const port = process.env.PORT || 3000;

const webpackConfig = require('../../webpack/webpack.config.js');

const app = express();

app.use('/api', route());

app.use(webpackMiddleware(webpack(webpackConfig),{
	publicPath: '/'
}));

app.listen(port, ()=>{
    console.log(`server listening at port: ${port}`);
});



