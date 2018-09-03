export default class BonusComponent {
    constructor(){
        this.element = document.createElement('bonus-component');

        // render html
        this.render();
    }

    render() {
		// create child elements
		let wrapDiv = document.createElement('div');
		let compTitle = document.createElement('h3');
		let message = document.createElement('p');

		compTitle.textContent = 'Congratulations!!';
		message.textContent = 'Bonus Received, you have got chance to play again!!';

		// load component with child elements
		wrapDiv.className = 'wrapElem';
		wrapDiv.appendChild(compTitle);
		wrapDiv.appendChild(message);
		this.element.appendChild(wrapDiv);
    }

	/**
	 * @description show bonus component and hides after 3000ms
	 * @function showBonusMsg
	 */
	showBonusMsg() {
		let showBonusPromise = new Promise((resolve) => {
			this.showBonusComp();
			setTimeout(() => {
				this.hideBonusComp();
				resolve();
			}, 3000);
		});
		return showBonusPromise;
    }
    
	/**
	 * @description adds show class to bonus component
	 * @function showBonusComp
	 */
	showBonusComp() {
		this.element.className = 'show';
	}

	/**
	 * @description adds hide class to bonus component
	 * @function hideBonusComp
	 */
	hideBonusComp() {
		this.element.className = 'hide';
	}
}