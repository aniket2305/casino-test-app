
export default class WinOutcomeMsgComponent {
    constructor(){
        this.element = document.createElement('h1');
        this.render();
    }

    render() {
        this.element.textContent = "Tap on Button below to Play!";
    }

	/**
	 * @description setter method for message property
	 */
	set message(message) {
		return this.element.textContent = message;
	}
}