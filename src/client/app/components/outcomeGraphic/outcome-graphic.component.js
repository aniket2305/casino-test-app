export default class OutcomeGraphicComponent {
    constructor() {
        this.element = document.createElement('graphic-container');
        this.render();
    }

    render() {
        this.createChildElements();
    }

	/**
	 * @description create and append child element for graphic
     *  to graphic-container
	 * @function createChildElements
	 */
    createChildElements() {
        for (let i=0; i<=2; i++){
            let childEle = document.createElement('div');
            childEle.className = 'graphic-blank';
            this.element.appendChild(childEle);
        }
    }
	/**
	 * @description sets random graphic
	 * @function setGraphic
	 */
	setGraphic(result) {
        const childEleList = this.element.childNodes;
        childEleList.forEach((elem, index)=>{
            elem.className = 'graphic-' + result[index];
        })
	}
}