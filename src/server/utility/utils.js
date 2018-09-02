
export default {
	/**
	 * @description generates three random numbers
	 *
	 * @function getRandomIntCollection
	 * @return [number] array of three random numbers
	 */

    getRandomIntCollection: () => {
        let randomNum = [];
		for (let count = 0; count <= 2; count++) {
			randomNum.push(generateRandomInt(0,5));
		}
		return randomNum;
    },

	/**
	 * @description returns bonus flag
	 * @function getBonusFlag
	 * @return 
	 */

    getBonusFlag: () => {
        return (Math.random() >= 0.6 && Math.random() <= 0.7);
    }

}

/**
 * @description generates random number
 * @function generateRandomInt
 * @return random number from the given range
 */

const generateRandomInt = (min,max) => {
    return Math.floor(Math.random()*(max-min+1)+min);
}

