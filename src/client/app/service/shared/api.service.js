import util from '../../utility/utils';

export default class ApiService {
	/**
	 * @function get
	 * @param {string} url
	 * @returns {promise}
	 */
	get(url) {
		return util.getHttpPromise(url, 'GET');
	}
}