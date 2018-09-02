import { Router } from 'express';
import utils from '../utility/utils';

/**
 * @description route to get random outcome
 */
export default () => {

	let router = Router();

	router.get('/', (req, res) => {
		res.json(generateOutcome());
	});

	return router;
}

/**
 * @description
 * @function generateOutcome
 * @returns random outcome response
 */
function generateOutcome() {
    const randomOutcome = utils.getRandomIntCollection();

	return {
		randomOutcome,
		bonusFlag: utils.getBonusFlag(),
	}
}


