// class to create reload button
export default class ReloadButtonComponent {
    constructor(){
        this.element = document.createElement('button');
        this.element.type = 'button';
		this.element.className = 'reload-button';
    }
}