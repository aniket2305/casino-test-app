export default {
	/**
	 * @function getHttpPromise
\	 */
	getHttpPromise: (endPoint, method) => {
		return new Promise((resolve, reject) => {
			let xmlhttp = new XMLHttpRequest();

			xmlhttp.open(method, endPoint, true);
			xmlhttp.json = true;

			xmlhttp.onload = function() {
				if (this.status == 200) {
					resolve(this.response);
				} else {
					reject({
						status: this.status,
						message: this.statusText
					});
				}
			};

			xmlhttp.onerror = function() {
				reject({
					status: this.status,
					message: this.statusText
				});
			};

			xmlhttp.send();
		});
	}
}
