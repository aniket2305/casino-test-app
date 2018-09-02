import ApiService from './shared/api.service';

/**
 * @description this service is used to fetch random outcome
 * @class RandomOutcomeService
 */
export default class RandomOutcomeService{
	constructor() {
		this.api = new ApiService();
	}

	/**
	 * @description makes API call to server to fetch random result.
	 * @function getResult
	 * @returns {promise} outcome api response
	 */
	getResult() {
		return this.api.get('/api/outcome')
			.then(handleSuccess.bind(this))
			.catch(handleError);

		function handleSuccess(response) {
			return JSON.parse(response);
		}

		function handleError(err) {
			console.log('error while loading data', err)
		}
	}
}
