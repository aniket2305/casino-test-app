import express from 'express';
import resultRoute from './result.route';

export default () => {
	let route = express.Router();

	// outcome route
	route.use('/outcome', resultRoute());

	return route;
}